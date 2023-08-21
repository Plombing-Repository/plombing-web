import styled from 'styled-components';
import React, { useState } from 'react';
import Box from './Box';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';

const Participation = () => {
  const navigate = useNavigate();
  const [countTen, setCountTen] = useState(0);
  const [countTwenty, setCountTwenty] = useState(0);
  const [countFifty, setCountFifty] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState('');

  const onSubmit = () => {
    // TODO: 서버로 데이터 전송 및 예외 처리
    navigate('/loading', {
      state: {
        total,
        gender: selected,
      },
    });
  };

  const handleGender = (e) => {
    setSelected(e.target.className);
    console.log(e.target);
  };

  const Counters = [
    { count: countTen, setCount: setCountTen, quantity: 10 },
    { count: countTwenty, setCount: setCountTwenty, quantity: 20 },
    { count: countFifty, setCount: setCountFifty, quantity: 50 },
  ];

  const boxData = [
    {
      volume: '10L',
      imageSource:
        'https://velog.velcdn.com/images/ea_st_ring/post/2c449fe8-5355-4d8b-8862-4c6a40d09fcd/image.svg',
    },
    {
      volume: '20L',
      imageSource:
        'https://velog.velcdn.com/images/ea_st_ring/post/5a2817fc-e386-4db6-b564-c67e08a775b5/image.svg',
    },
    {
      volume: '50L',
      imageSource:
        'https://velog.velcdn.com/images/ea_st_ring/post/898cfae8-3eac-4314-b37b-1a85413a7d5a/image.svg',
    },
  ];

  return (
    <div>
      <Header />

      <FlexCenterContainer>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbprmXJ%2FbtspFjaIb3s%2Fu8nTN2tqrmKRkdkwkpqAK1%2Fimg.png"
          alt="logo"
          style={{
            width: '100px',
            height: '100px',
            marginBottom: '32px',
          }}
        />
        <StyledH3>오늘 하루 얼마 만큼의 쓰레기를 주우셨나요?</StyledH3>
        <StyledH6>쓰레기의 종류에 상관없이 부피를 입력해 주세요.</StyledH6>

        <BoxWrapper>
          {boxData.map((data, index) => (
            <Box
              key={index}
              volume={data.volume}
              imageSource={data.imageSource}
              count={Counters[index].count}
              setCount={Counters[index].setCount}
              total={total}
              setTotal={setTotal}
              quantity={Counters[index].quantity}
            />
          ))}
        </BoxWrapper>

        <SelectGenderBox>
          <StyledH3>성별을 선택해주세요</StyledH3>
          <StyledH6>
            플로밍의 운동 효과 계산을 위해 성별을 입력받고 있습니다.
          </StyledH6>
          <SelectButtonBox>
            <GenderFormat>
              <h6>남자</h6>
              <div className="male" onClick={handleGender}>
                {selected === 'male' && <Selected />}
              </div>
            </GenderFormat>
            <GenderFormat>
              <h6>여자</h6>
              <div className="female" onClick={handleGender}>
                {selected === 'female' && <Selected />}
              </div>
            </GenderFormat>
          </SelectButtonBox>
        </SelectGenderBox>

        <StyledH3>내가 모은 쓰레기</StyledH3>
        <CollectImage src="https://velog.velcdn.com/images/ea_st_ring/post/5070f83f-2628-4c71-b140-b981bbd4118f/image.svg" />
        <ResultTextBox>
          {/* TODO: 위치 조정 */}
          <h2>{total}L</h2>
          <h3>지구의 쓰레기가 모여들고 있어요!</h3>
          <h4>건강한 환경에 기여하고 있습니다.</h4>
        </ResultTextBox>
        <StyledButton type="button" onClick={onSubmit}>
          결과 보기
        </StyledButton>
      </FlexCenterContainer>
    </div>
  );
};

const StyledH3 = styled.h3`
  font-size: 1.8rem;
  margin-bottom: -10px;
  margin-top: 0;
`;

const StyledH6 = styled.h6`
  font-size: 1rem;
  margin-bottom: 48px;
`;

const FlexCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background: linear-gradient(180deg, #dcffd9 0%, rgba(255, 255, 255, 0) 50%);
  padding: 120px 240px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 40px 16px;
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-bottom: 120px;
`;

const CollectImage = styled.img`
  width: 400px;
  margin-top: 60px;
`;

const ResultTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.4rem;
    position: absolute;
    bottom: 470px;
  }
  h3 {
    margin-bottom: 0;
    font-size: 1.4rem;
  }
`;

const SelectGenderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`;

const SelectButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 100px;
`;

const GenderFormat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  h6 {
    font-size: 1.2rem;
    margin: 0 10px 0 0;
  }
  div:nth-child(2) {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #76e481;
    z-index: 1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Selected = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #76e481;
  z-index: 2;
`;

const StyledButton = styled.button`
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 16px;
  border: none;
  background-color: #99e28d;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-top: 48px;
  cursor: pointer;
`;

export default Participation;
