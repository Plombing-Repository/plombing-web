import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Polygon } from './assets/polygon.svg';
import { ReactComponent as LastPhaseModel } from './assets/last_phase.svg';
import arrowIcon from './assets/Vector.svg';
import ArticleItem from './ArticleItem';
import RecommendItem from './RecommendItem';

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setProgress(340);
    const timer = setInterval(() => {
      if (percentage < 95) {
        // 후에 340, 95을 실제 퍼센테이지에 맞게 수정
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <Section>
      <Banner>
        <BannerText>
          <h1>
            운동하며 환경보호까지!
            <br />
            마운틴 플로깅, 플로밍
          </h1>
          <h3> 지금까지 341명이 플로밍했어요</h3>
          <Progress style={{ width: `${progress + 20}px` }}>
            <p>{percentage}%</p>
            <Polygon style={{ marginRight: '15px' }} />
          </Progress>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}px`, background: '#80d088' }}
            ></div>
          </div>
          <button onClick={() => window.location.replace('/flombing')}>
            플로밍 하기
          </button>
        </BannerText>
        <LastPhaseModel />
      </Banner>

      <Articles>
        <Header>
          <h3>요새 뜨는 환경이슈들을 둘러보세요.</h3>
          <ViewAllBtn>
            <button>전체보기</button>
            <img src={arrowIcon} />
          </ViewAllBtn>
        </Header>
        <ArticleItem />
      </Articles>

      <Recommends>
        <Header>
          <h3>플로밍 할 만한 산을 추천해드려요!</h3>
          <ViewAllBtn>
            <button>전체보기</button>
            <img src={arrowIcon} />
          </ViewAllBtn>
        </Header>
        <RecommendItem />
      </Recommends>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/f1209c0b-5057-47cd-a472-e454086bd453/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  z-index: -1;
  padding: 40px 240px;
  box-sizing: border-box;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 24px;
  justify-content: flex-start;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #000;
  text-align: start;
  margin-bottom: 1rem;
  margin-right: 4rem;
  line-height: 150%;
  h1 {
    font-size: 2rem;
    line-height: 150%;
  }

  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #3f3f3f;
    margin-top: 10px;
  }
  .progress-container,
  .progress-bar {
    width: 370px;
    height: 12px;
    border-radius: 20px;
    background: #fff;
    transition: all 2s ease-out;
  }
  button {
    width: fit-content;
    height: 64px;
    padding: 16px 60px;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: Pretendard;
    background: #99e28d;
    border-radius: 16px;
    border: none;
    letter-spacing: -0.5px;
    margin-top: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  bottom: 10px;
  transition: all 2s ease-out;
  p {
    font-size: 21px;
    margin: 0;
    height: 32px;
    cursor: default;
  }
`;

const Articles = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
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
`;

const ViewAllBtn = styled.div`
  button {
    color: #1e1e1e;
    background-color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Recommends = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
