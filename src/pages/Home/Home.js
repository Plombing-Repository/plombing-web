import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import arrowIcon from '../Article/assets/Vector.svg';
import ArticleItem from '../Article/ArticleItem';
import Footer from './Footer';
import Header from './Header';
import Dummy from '../../Dummy.json';
import Banner from './Banner';

const Home = () => {
  const [percentage, setPercentage] = useState(0);
  const [phaseModel, setPhaseModel] = useState('');
  const [progress, setProgress] = useState(0);
  const [background, setBackground] = useState('');

  const phaseModel1 =
    'https://velog.velcdn.com/images/ea_st_ring/post/a16328c0-b47e-46f8-b7ed-7aa0800e8233/image.svg';
  const phaseModel2 =
    'https://velog.velcdn.com/images/ea_st_ring/post/c28c1724-cc59-48f1-a124-ea8a48f8b528/image.svg';
  const phaseModel3 =
    'https://velog.velcdn.com/images/ea_st_ring/post/709f5004-60b5-4b65-94b6-027eb3be09c1/image.svg';

  const number = Dummy.plombing_process.plombing;
  let tmpProgress = 0;
  useEffect(() => {
    function fetchData() {
      tmpProgress = Dummy.plombing_process.progress;
      setProgress(tmpProgress);
      if (tmpProgress < 30) {
        setPhaseModel(phaseModel1);
        setBackground(
          'https://velog.velcdn.com/images/ea_st_ring/post/0e919ba0-2cb2-481a-a1d9-efad4611e876/image.svg',
        );
      } else if (tmpProgress < 60) {
        setPhaseModel(phaseModel2);
        setBackground(
          'https://velog.velcdn.com/images/ea_st_ring/post/f1209c0b-5057-47cd-a472-e454086bd453/image.png',
        );
      } else {
        setPhaseModel(phaseModel3);
        setBackground(
          'https://velog.velcdn.com/images/ea_st_ring/post/f1209c0b-5057-47cd-a472-e454086bd453/image.png',
        );
      }
    }
    fetchData();
    const timer = setInterval(
      () => {
        if (percentage < tmpProgress) {
          setPercentage((prevPercentage) => prevPercentage + 1);
        } else {
          clearInterval(timer);
        }
      },
      (15 / tmpProgress) * 100,
    );
    return () => clearInterval(timer);
  }, [percentage]);
  return (
    <Section>
      <StyledHeader />
      <ContentsSection $background={background}>
        <Banner
          percentage={percentage}
          progress={progress}
          number={number}
          phaseModel={phaseModel}
        />
        <Contents>
          <Title>
            <h3>요새 뜨는 환경이슈들을 둘러보세요.</h3>
            <div>
              <button>전체보기</button>
              <img src={arrowIcon} />
            </div>
          </Title>
          <ArticleItem />
        </Contents>
      </ContentsSection>
      <Footer />
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url(${props.$background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: fit-content;
  padding: 40px 240px;
  box-sizing: border-box;
  padding: 40px 240px;
  box-sizing: border-box;
`;

const Contents = styled.div`
  margin-top: 192px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #1e1e1e;
  }
  div button {
    color: #1e1e1e;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default Home;
