import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import arrowIcon from '../Community/Contents/Article/assets/Vector.svg';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import MainArticle from './MainArticle';
import ArticleItem from '../Community/Contents/Article/ArticleItem';
import RecommendItem from '../Community/Contents/Mountain/Recommend';
import Confetti from '../../effects/Confetti';
import axios from 'axios';

const Home = () => {
  const [percentage, setPercentage] = useState(0);
  const [phaseModel, setPhaseModel] = useState('');
  const [progress, setProgress] = useState(0);
  const [background, setBackground] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          'http://ec2-43-201-95-22.ap-northeast-2.compute.amazonaws.com:8080/v1/season/progress',
        );
        console.log(res.data.data);
        const dataProgress = res.data.data.percent;
        const dataNumber = res.data.data.plombers;

        setProgress(dataProgress);
        setNumber(dataNumber);

        const { phaseModel, backgroundImg } = setPhase(dataProgress);
        setPhaseModel(phaseModel);
        setBackground(backgroundImg);
        if (dataProgress === 100) {
          setTimeout(() => {
            setIsVisible(true);
          }, 2000);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (percentage < progress) {
          setPercentage((prevPercentage) => prevPercentage + 1);
        } else {
          clearInterval(timer);
        }
      },
      (15 / progress) * 100,
    );
    return () => clearInterval(timer);
  }, [percentage]);

  console.log(number);
  return (
    <Section>
      {isVisible && <Confetti />}
      <StyledHeader />
      <ContentsSection $background={background}>
        <Banner
          percentage={progress}
          progress={progress}
          number={number}
          phaseModel={phaseModel}
        />
        <Contents>
          <Title>
            <div>
              <h3>요새 뜨는 환경 아티클을 둘러보세요</h3>
              <button>
                <Link to="/community">
                  <img src={arrowIcon} />
                </Link>
              </button>
            </div>
          </Title>
          {width <= 800 ? <ArticleItem /> : <MainArticle />}
        </Contents>
        <Title>
          <div>
            <h3>플로밍 할 만한 산을 추천해드려요!</h3>
            <button>
              <Link to="/community">
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
  background-image: ${(props) => `url(${props.$background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: fit-content;
  padding: 40px 240px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    margin: 0 0 60px 0;
    background-size: 100%;
    background-position: 0px 0px;
    top: 0;
    padding: 40px 15px;
  }
`;

const Contents = styled.div`
  margin-top: 192px;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 400px;
    margin-top: 180px;
  }
`;

const Title = styled.div`
  margin-bottom: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
  }
  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #1e1e1e;
    margin-right: 4px;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  button {
    background: none;
    outline: none;
    border: none;
  }
  img {
    width: 10px;
    opacity: 0.6;
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
  @media screen and (max-width: 800px) {
    margin-bottom: 200px;
    margin: 0;
    flex-direction: column;
  }
`;

/** progress에 따라서 phaseModel과 backgroundImg를 설정해주는 함수
 * @param {number} progress
 * @returns {object} { phaseModel, backgroundImg }
 * @example
 * const { phaseModel, backgroundImg } = setPhase(30);
 *
 **/
const setPhase = (progress) => {
  const phaseModel1 =
    'https://velog.velcdn.com/images/ea_st_ring/post/a95574f8-3e6c-4ae8-89d7-bfda02885562/image.svg';
  const phaseModel2 =
    'https://velog.velcdn.com/images/ea_st_ring/post/013c3a07-5f73-48d0-96cc-e6b74f3129b5/image.svg';
  const phaseModel3 =
    'https://velog.velcdn.com/images/ea_st_ring/post/b36cca68-00d1-4d8f-ae80-a49bcf98a287/image.svg';
  const background1 =
    'https://velog.velcdn.com/images/ea_st_ring/post/0e919ba0-2cb2-481a-a1d9-efad4611e876/image.svg';
  const background2 =
    'https://velog.velcdn.com/images/ea_st_ring/post/f1209c0b-5057-47cd-a472-e454086bd453/image.png';
  const background3 =
    'https://velog.velcdn.com/images/ea_st_ring/post/f1209c0b-5057-47cd-a472-e454086bd453/image.png';
  let phaseModel = '';
  let backgroundImg = '';
  if (progress < 30) {
    phaseModel = phaseModel1;
    backgroundImg = background1;
  } else if (progress < 60) {
    phaseModel = phaseModel2;
    backgroundImg = background2;
  } else if (progress < 101) {
    phaseModel = phaseModel3;
    backgroundImg = background3;
  }
  return { phaseModel, backgroundImg };
};

export default Home;
