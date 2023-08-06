import styled from 'styled-components';
import React from 'react';
import Button from './Button';
import Box from './Box';

const StyledH3 = styled.h3`
  font-size: 36px;
  margin-bottom: 10px; // h3과 h6 사이의 간격을 좁히기 위한 값을 조정하실 수 있습니다.
`;

const StyledH6 = styled.h6`
  font-size: 18px;
`;

const FlexCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가로 방향 중앙 정렬
  justify-content: center; // 세로 방향 중앙 정렬
  width: 100vw; // 뷰포트의 전체 너비로 설정
  height: 100vh; // 뷰포트의 전체 높이로 설정
  background: linear-gradient(180deg, #dcffd9 0%, rgba(255, 255, 255, 0) 100%);
  margin-top: -50px;
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center; // 가운데 정렬
  gap: 20px; // Box 사이의 간격. 필요에 따라 조절 가능
`;

const Participation = () => {
  const boxData = [
    {
      volume: '10L',
      imageSource:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNWL0S%2Fbtsqj2RSGGM%2F0kt5FCKE1sLcUPzHyWZwwk%2Fimg.png',
    },
    {
      volume: '20L',
      imageSource:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW2NDw%2FbtspOBnAPH7%2F43NlSdCaTyH2iCjdcD4C2k%2Fimg.png',
    },
    {
      volume: '30L',
      imageSource:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2IIwr%2FbtspUn29oXy%2FvyeHHXMyKr6d3OEKT1xUc0%2Fimg.png',
    },
  ];

  return (
    <FlexCenterContainer>
      <img
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbprmXJ%2FbtspFjaIb3s%2Fu8nTN2tqrmKRkdkwkpqAK1%2Fimg.png"
        alt="logo"
        width="100px"
        height="100px"
      />
      <StyledH3>오늘 하루 얼마 만큼의 쓰레기를 주우셨나요?</StyledH3>
      <StyledH6>쓰레기의 종류에 상관없이 부피를 입력해 주세요.</StyledH6>
      <BoxWrapper>
        {boxData.map((data, index) => (
          <Box
            key={index}
            volume={data.volume}
            imageSource={data.imageSource}
          />
        ))}
      </BoxWrapper>
      <Button />
    </FlexCenterContainer>
  );
};
export default Participation;
