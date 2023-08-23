import React, { useState, useEffect, useRef } from 'react';
import Header from '../Home/Header';
import { styled } from 'styled-components';
import CircleProgress from './CircleProgress';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const total = location.state?.total;
  const progress = location.state?.progress;
  const kcal = location.state?.kcal;

  const [isInfoShow, setInfoShow] = useState(false);
  const [isAnimalShow, setAnimalShow] = useState(false);
  const [isFitnessShow, setFitnessShow] = useState(false);

  const infoBoxRef = useRef(null);
  const animalBoxRef = useRef(null);
  const fitnessBoxRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'infoBox':
            setInfoShow(true);
            break;
          case 'animalBox':
            setAnimalShow(true);
            break;
          case 'fitnessBox':
            setFitnessShow(true);
            break;
          default:
            break;
        }
      }
    });
  };

  useEffect(() => {
    const headerObserver = new IntersectionObserver(handleIntersect, options);

    if (infoBoxRef.current) headerObserver.observe(infoBoxRef.current);
    if (animalBoxRef.current) headerObserver.observe(animalBoxRef.current);
    if (fitnessBoxRef.current) headerObserver.observe(fitnessBoxRef.current);

    return () => {
      if (infoBoxRef.current) headerObserver.unobserve(infoBoxRef.current);
      if (animalBoxRef.current) headerObserver.unobserve(animalBoxRef.current);
      if (fitnessBoxRef.current)
        headerObserver.unobserve(fitnessBoxRef.current);
    };
  }, []);
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
          <InfoResultBox
            ref={infoBoxRef}
            id="infoBox"
            className={isInfoShow ? 'observed' : ''}
          >
            <CollectBox>
              <h3>내가 모은 쓰레기</h3>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/b760e54b-2a48-404c-b00b-8cee8df57ae0/image.svg" />
              </ImageWrapper>
              {/* TODO: 위치 조정 */}
              <span>{total}L</span>
              <h4>지구의 쓰레기가 모여들고 있어요!</h4>
            </CollectBox>

            <NextLevelBox>
              <h3>다음 레벨까지</h3>
              <ImageWrapper>
                {isInfoShow && <CircleProgress progress={progress} />}
              </ImageWrapper>
              <h4>현재 2단계 플로밍 어스!</h4>
            </NextLevelBox>
          </InfoResultBox>

          <Animal
            ref={animalBoxRef}
            id="animalBox"
            className={isAnimalShow ? 'observed' : ''}
          >
            <SaveAnimalBox>
              <BlurCircle />
              <h2>오늘 내가 구한 동물</h2>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/2def8196-14f7-414b-8377-9f86bdf26d68/image.svg" />
              </ImageWrapper>
              <h3>아싸 너구리!</h3>
            </SaveAnimalBox>
          </Animal>

          <Fitness
            ref={fitnessBoxRef}
            id="fitnessBox"
            className={isFitnessShow ? 'observed' : ''}
          >
            <FitnessBox>
              <h2>플로밍의 운동효과</h2>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/63e37e5d-73d7-4434-99a9-5234737b849d/image.svg" />
              </ImageWrapper>
              <h3>*스쿼트, 런지 운동 효과로 측정한 값이에요.</h3>
            </FitnessBox>
            <span>{kcal}</span>
            <br />
            <span>Kcal</span>
          </Fitness>
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
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

const ShareNoticeText = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.5px;
  line-height: 150%;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    margin-bottom: 16px;
  }
`;

const FrameBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 220%;
    height: 50px;
  }
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
  @media screen and (max-width: 500px) {
    width: 300px;
    margin-top: -10px;
    padding-left: 20px;
  }
`;

const ResultContainer = styled.div`
  width: 600px;
  height: 600px;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'InfoResultBox InfoResultBox'
    'Animal Fitness';
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 400px;
    margin-top: -10px;
    grid-gap: 16px;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: 1fr 1fr !important;
  }
`;

const InfoResultBox = styled.div`
  grid-area: InfoResultBox;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.5s ease-in;
  opacity: 0;
  &.observed {
    opacity: 1;
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.5;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 200px;
  }
`;

const CollectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 270px;
  h2,
  h3,
  h4 {
    margin: 0;
  }
  img {
    width: 200px;
    margin: 12px 0 12px 0;
  }
  span {
    position: relative;
    bottom: 60px;
    z-index: 2;
    font-size: 1.4rem;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 160px;
    h3 {
      font-size: 0.8rem;
    }
    h4 {
      font-size: 0.52rem;
      margin-top: -32px;
      width: 130px;
      text-align: center;
    }
    img {
      width: 100px;
      margin: 12px 0 12px 0;
    }
    span {
      font-size: 1rem;
      margin-top: 11px;
    }
  }
`;

const NextLevelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 270px;
  h2 {
    margin-top: 0;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 160px;
    h3 {
      font-size: 0.8rem;
    }
    h4 {
      font-size: 0.52rem;
      margin-top: -40px;
      width: 130px;
      text-align: center;
    }
    div {
      width: 80px;
      margin-top: -40px;
    }
  }
`;

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

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animal = styled.div`
  grid-area: Animal;
  width: 300px;
  height: 310px;
  background-color: #fff;
  backdrop-filter: blur(3.5px);
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.1s ease-in;
  opacity: 0;
  &:hover {
    transform: translateY(-4px);
  }
  &.observed {
    opacity: 1;
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.5;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 500px) {
    width: 145px;
    height: 188px;
  }
`;

const SaveAnimalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  img {
    width: 280px;
    margin-top: 32px;
  }
  h3 {
    font-size: 0.9rem;
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    width: 145px;
    height: 160px;
    h2 {
      font-size: 0.8rem;
      margin-top: 24px;
      margin-bottom: 0;
    }
    img {
      width: 130px;
      margin-top: 10px;
    }
    h3 {
      font-size: 0.7rem;
      margin-top: -10px;
    }
  }
`;

const Fitness = styled.div`
  grid-area: Fitness;
  width: 300px;
  height: 310px;
  background-color: #fff;
  backdrop-filter: blur(3.5px);
  border-radius: 20px;
  border: 1px solid #76e481;
  transition: all 0.1s ease-in;
  opacity: 0;
  &:hover {
    transform: translateY(-4px);
  }
  span {
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    &:nth-child(2) {
      bottom: 136px;
      left: 90px;
    }
    &:last-child {
      bottom: 112px;
      left: 90px;
    }
  }
  &.observed {
    animation: fadeIn 0.5s ease-in-out;
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.5;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 500px) {
    width: 145px;
    height: 188px;
    span {
      font-size: 0.8rem;
      font-weight: 600;
      position: absolute;
      &:nth-child(2) {
        bottom: 100px;
        left: 38px;
      }
      &:last-child {
        bottom: 84px;
        left: 38px;
      }
    }
  }
`;

const FitnessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0px;
  }
  img {
    width: 180px;
  }
  h3 {
    font-size: 0.9rem;
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    width: 145px;
    height: 160px;
    h2 {
      font-size: 0.8rem;
      margin-top: 24px;
      margin-bottom: 0;
    }
    img {
      width: 96px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    h3 {
      width: 130px;
      text-align: center;
      font-size: 0.5rem;
      margin-top: 10px;
    }
  }
`;

export default Result;
