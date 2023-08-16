import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Polygon } from './assets/polygon.svg';

const Banner = (props) => {
  const { percentage, progress, number, phaseModel } = props;
  return (
    <BannerWrapper>
      <BannerText>
        <h1>
          운동하며 환경보호까지!
          <br />
          마운틴 플로깅, 플로밍
        </h1>
        <h3>
          지금까지
          <span style={{ fontSize: '28px', color: 'black' }}>
            &nbsp;{number}명
          </span>
          이 플로밍했어요
        </h3>
        <Progress style={{ width: `${progress * 3.4 + 20}px` }}>
          <p>{percentage}%</p>
          <Polygon style={{ marginRight: '15px' }} />
        </Progress>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${progress * 3.4}px`,
              background: '#80d088',
            }}
          ></div>
        </div>
        <button onClick={() => window.location.replace('/plombing')}>
          플로밍 하기
        </button>
      </BannerText>
      <img src={phaseModel} alt="phase_model" />
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 24px;
  justify-content: flex-start;
  img {
    width: 680px;
    height: 449px;
  }
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
  min-width: 360px;
  h1 {
    font-size: 2rem;
    line-height: 150%;
  }

  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #3f3f3f;
    margin-top: 10px;
    letter-spacing: 0.5px;
  }
  .progress-container,
  .progress-bar {
    width: 340px;
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
    margin-top: 52px;
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
  bottom: 8px;
  transition: all 2s ease-out;
  p {
    font-size: 20px;
    margin: 0;
    height: 32px;
    cursor: default;
  }
`;

export default Banner;
