import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Polygon } from './assets/polygon.svg';
/** progress에 따라서 phaseModel, background, progressBar, participateBtn를 설정해주는 함수
 * @param {number} progress
 * @returns {object} { phaseModel, background, progressBar, participateBtn }
 * @example
 * const { phaseModel, background, progressBar, participateBtn } = setPhase(30);
 *
 **/
const Banner = (props) => {
  const { percentage, progress, number, phaseModel, color } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
          <span
            style={{ fontSize: '28px', color: 'black', fontFamily: 'Roboto' }}
          >
            &nbsp;{number}명
          </span>
          이 플로밍했어요
        </h3>
        <Progress
          style={{
            width:
              width > 500
                ? `${progress * 3.4 + 20}px`
                : `${progress * 2.5 + 4}px`,
          }}
        >
          <p style={{ fontFamily: 'Roboto' }}>{percentage}%</p>
          <Polygon style={{ marginRight: '15px' }} fill={color[0]} />
        </Progress>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width:
                width > 800 ? `${progress * 3.4}px` : `${progress * 2.5}px`,
              background: color[0],
            }}
          ></div>
        </div>
        <button
          onClick={() => window.location.replace('/plombing')}
          style={{
            color: 'black',
            background: color[0],
          }}
        >
          플로밍 하기
        </button>
      </BannerText>
      <ProgressImage
        src={phaseModel}
        alt="phase_model"
        width={width < 500 ? 250 : 550}
        height={width < 500 ? 200 : 450}
      />
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 24px;
  justify-content: center;
  img {
    width: 680px;
    height: 449px;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 0;
    img {
      width: 300px;
      margin-right: 64px;
    }
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
    @media screen and (max-width: 500px) {
      margin-bottom: 64px;
    }
  }
  .progress-container,
  .progress-bar {
    width: 340px;
    height: 12px;
    border-radius: 20px;
    background: #fff;
    /* background: ${(props) => `${props.progress}`}; */
    transition: all 2s ease-out;
    @media screen and (max-width: 800px) {
      transition: all 3s ease-out;
      width: 250px;
    }
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
  @media screen and (max-width: 500px) {
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    .progress-container {
      border: 1px solid #ededed;
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
  @media screen and (max-width: 500px) {
    align-self: start;
    margin-left: 72px;
    transition: all 3s ease-out;
  }
`;

const ProgressImage = styled.img`
  width: 559px !important;
  height: 449px !important;
  @media screen and (max-width: 500px) {
    width: 309px !important;
    height: 300px !important;
    margin-right: 16px !important;
  }
`;

export default Banner;
