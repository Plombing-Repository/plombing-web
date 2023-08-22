import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import arrowIcon from '../Community/Contents/Article/assets/Vector.svg';
import Footer from './Footer';
import Header from './Header';
import Dummy from '../../Dummy.json';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import MainArticle from './MainArticle';
import RecommendItem from '../Community/Contents/Mountain/Recommend';
import Confetti from '../../effects/Confetti';

const Home = () => {
  const [percentage, setPercentage] = useState(0);
  const [phaseModel, setPhaseModel] = useState('');
  const [progress, setProgress] = useState(0);
  const [background, setBackground] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [progressBarColor, setProgressBarColor] = useState();
  const [participateBtnColor, setParticitateBtnColor] = useState();

  const number = Dummy.plombing_process.plombing;
  let tmpProgress = 0;
  useEffect(() => {
    function fetchData() {
      tmpProgress = Dummy.plombing_process.progress * 1;
      setProgress(tmpProgress);
      const { phaseModel, background, progressBarColor, participateBtnColor } =
        setPhase(tmpProgress);
      setPhaseModel(phaseModel);
      setBackground(background);
      setProgressBarColor(progressBarColor);
      setParticitateBtnColor(participateBtnColor);
      if (tmpProgress === 100) {
        setTimeout(() => {
          setIsVisible(true);
        }, 2000);
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
      {isVisible && <Confetti />}
      <StyledHeader />
      <ContentsSection $background={background}>
        <Banner
          percentage={percentage}
          progress={progress}
          number={number}
          phaseModel={phaseModel}
          color={[progressBarColor, participateBtnColor]}
        />
        <Contents>
          <Title>
            <h3>요새 뜨는 환경 아티클을 둘러보세요.</h3>
            <div>
              <button>
                <Link to="/community">
                  <p>전체보기</p>
                  <img src={arrowIcon} />
                </Link>
              </button>
            </div>
          </Title>
          <MainArticle />
        </Contents>
        <Title>
          <h3>플로밍 할 만한 산을 추천해드려요!</h3>
          <div>
            <button>
              <Link to="/community">
                <p>전체보기</p>
                <img src={arrowIcon} />
              </Link>
            </button>
          </div>
        </Title>
        <RecommendItem />
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
  min-height: 100vh;
  flex: 1;
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
  background: ${(props) => `${props.$background}`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: fit-content;
  padding: 40px 240px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    margin: 0px;
    background-size: 100%;
    background-position: 0px 0px;
    top: 0;
    padding: 40px 16px;
  }
`;

const Contents = styled.div`
  margin-top: 192px;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 800px;
  }
`;

const Title = styled.div`
  margin-bottom: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    margin: 0px;
    flex-direction: column;
  }
  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #1e1e1e;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  button {
    background: none;
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    color: #1e1e1e;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 8px;
    }
    img {
      margin-top: 2px;
    }
  }
`;

/** progress에 따라서 phaseModel, background, progressBar, participateBtn를 설정해주는 함수
 * @param {number} progress
 * @returns {object} { phaseModel, background, progressBar, participateBtn }
 * @example
 * const { phaseModel, background, progressBar, participateBtn } = setPhase(30);
 *
 **/
const setPhase = (progress) => {
  const phaseModel1 =
    'https://velog.velcdn.com/images/ea_st_ring/post/a16328c0-b47e-46f8-b7ed-7aa0800e8233/image.svg';
  const phaseModel2 =
    'https://velog.velcdn.com/images/ea_st_ring/post/c28c1724-cc59-48f1-a124-ea8a48f8b528/image.svg';
  const phaseModel3 =
    'https://velog.velcdn.com/images/ea_st_ring/post/709f5004-60b5-4b65-94b6-027eb3be09c1/image.svg';
  const background1 = `linear-gradient(180deg, #FFF9D9 0%, rgba(255, 255, 255, 0.00) 100%)`;
  const background2 = `linear-gradient(180deg, #DCFFD9 0%, rgba(255, 255, 255, 0.00) 100%)`;
  const background3 = `linear-gradient(180deg, #DCFFD9 0%, rgba(255, 255, 255, 0.00) 100%)`;
  const progressBar1 = `#D0AC80`;
  const progressBar2 = `#76E481`;
  const progressBar3 = `#76E481`;
  const participateBtn1 = `#D0AC80`;
  const participateBtn2 = `#76E481`;
  const participateBtn3 = `#76E481`;
  let phaseModel = '';
  let background = ``;
  let progressBarColor = ``;
  let participateBtnColor = ``;
  if (progress < 30) {
    phaseModel = phaseModel1;
    background = background1;
    progressBarColor = progressBar1;
    participateBtnColor = participateBtn1;
  } else if (progress < 60) {
    phaseModel = phaseModel2;
    background = background2;
    progressBarColor = progressBar2;
    participateBtnColor = participateBtn2;
  } else if (progress < 101) {
    phaseModel = phaseModel3;
    background = background3;
    progressBarColor = progressBar3;
    participateBtnColor = participateBtn3;
  }
  return { phaseModel, background, progressBarColor, participateBtnColor };
};

export default Home;
