import React from 'react';
import Header from '../Home/Header';
import { styled } from 'styled-components';
import CircleProgress from './CircleProgress';
const Result = () => {
  return (
    <div>
      <BackgroundImage src="https://velog.velcdn.com/images/ea_st_ring/post/92a0c75e-165e-4f06-9afd-c827ddd1a043/image.svg" />
      <Header />
      <Section>
        <ShareNoticeText>
          현재 페이지를 캡쳐해서 <br />
          SNS로 친구들과 공유해 보세요!
        </ShareNoticeText>

        <FrameBox>
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/144131d2-9bea-4f9e-81cb-fe1321c9faae/image.svg" />
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/5b07e14a-9bfb-4966-88a5-22ad38775576/image.svg" />
        </FrameBox>

        <ResultGraphic
          src="https://velog.velcdn.com/images/ea_st_ring/post/57d50fba-f605-4e6c-9751-21fd3957f979/image.svg"
          className="result_model"
        />
        <ResultContainer>
          <SaveResultBox>
            <SaveAnimalBox>
              <BlurCircle />
              <h2>오늘 내가 구한 동물</h2>
              <img src="https://velog.velcdn.com/images/ea_st_ring/post/3c366ec7-c67b-42c2-8906-4db73822e9f4/image.svg" />
              <h3>아싸 너구리!</h3>
            </SaveAnimalBox>
            <NextLevelBox>
              <h2>다음 레벨까지</h2>
              <CircleProgress />
              <h3>거 파이팅하쇼</h3>
            </NextLevelBox>
          </SaveResultBox>
          <Garbage></Garbage>
          <NextLevel></NextLevel>
        </ResultContainer>

        <FrameBox>
          <img
            src="https://velog.velcdn.com/images/ea_st_ring/post/144131d2-9bea-4f9e-81cb-fe1321c9faae/image.svg"
            style={{ transform: 'rotate(-90deg)' }}
          />
          <img
            src="https://velog.velcdn.com/images/ea_st_ring/post/5b07e14a-9bfb-4966-88a5-22ad38775576/image.svg"
            style={{ transform: 'rotate(90deg)' }}
          />
        </FrameBox>
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 120px;
  box-sizing: border-box;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 2100px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ShareNoticeText = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.5px;
  line-height: 150%;
  text-align: center;
`;

const FrameBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultGraphic = styled.img`
  width: 640px;
  object-fit: cover;
  margin-right: 52px;
  margin-bottom: 40px;
  @keyframes riseup {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: riseup 1s ease-in-out;
`;

const ResultContainer = styled.div`
  width: 700px;
  height: 600px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'saveResultBox saveResultBox'
    'Garbage NextLevel';
`;

const SaveResultBox = styled.div`
  grid-area: saveResultBox;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.1s ease-in;
  &:hover {
    transform: translateY(-4px);
  }
`;

const SaveAnimalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  h2 {
    font-size: 1.4rem;
    z-index: 2;
    margin-bottom: 0;
  }
  img {
    width: 220px;
  }
  h3 {
    font-size: 1rem;
  }
`;

const NextLevelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
`;

// 어떻게 써먹어야 하냐
const BlurCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: linear-gradient(
    359deg,
    #d4ffd9 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: none;
`;

const Garbage = styled.div`
  grid-area: Garbage;
  width: 340px;
  height: 300px;
  background-color: #fff;
  backdrop-filter: blur(3.5px);
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.1s ease-in;
  &:hover {
    transform: translateY(-4px);
  }
`;

const NextLevel = styled.div`
  grid-area: NextLevel;
  width: 340px;
  height: 300px;
  background-color: #fff;
  backdrop-filter: blur(3.5px);
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.1s ease-in;
  &:hover {
    transform: translateY(-4px);
  }
`;

export default Result;
