import React from 'react';
import { styled } from 'styled-components';
import description from './assets/description.json';
import { ReactComponent as Phase } from './assets/Group.svg';
import Header from '../Home/Header';
const About = () => {
  return (
    <Section>
      <StyledHeader />
      <Banner>
        <h1>
          지방은 덜고, 자연은 더하고, 두 마리 토끼 잡는 트렌트 <br /> 마운틴
          플로깅, 플로밍
        </h1>
      </Banner>
      <Contents>
        <TextBox>
          <Subtitle>&apos;플로밍&apos;이 무슨 뜻일까</Subtitle>
          <p>
            플로밍은 줍다를 뜻하는 &apos;Plocka up&apos;과 산을 뜻하는
            &apos;Climbing&apos;을 합한 합성어로 산에서 하는 플로깅을 뜻합니다.
          </p>
          <PlombingImg
            src="https://velog.velcdn.com/images/ea_st_ring/post/46ad1be8-7b88-4aa2-903e-ca09b8818fdd/image.svg"
            alt="what_is_plombing"
          />
        </TextBox>

        <TextBox>
          <Subtitle>산에서도 플로깅을 해야하는 이유가 뭘까</Subtitle>
          {description.text1.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </TextBox>

        <TextBox>
          <Subtitle>플로밍을 하면 건강해질까</Subtitle>
          {description.text2.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </TextBox>

        <Image src="https://velog.velcdn.com/images/ea_st_ring/post/601e822a-3fe4-4b44-96a7-795b26c1a027/image.png"></Image>

        <TextBox>
          <Subtitle>집에서 참여하는 플로밍 어떻게 하는걸까</Subtitle>
          {description.text3.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </TextBox>
        <h1>지금까지 N명이 플로밍했어요</h1>
        <Phase />
        <button onClick={() => window.location.replace('/plombing')}>
          플로밍 참여하기
        </button>
      </Contents>
    </Section>
  );
};

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 440px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/1d559585-5644-49bd-a98c-843e11fb3ed3/image.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 40px;
  color: white;
  h1 {
    font-size: 2rem;
    line-height: 150%;
    font-weight: 500;
  }
`;

const Contents = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 440px;
  width: 100%;
  height: fit-content;
  padding: 120px 240px;
  color: 'black';
  h1 {
    text-align: center;
    padding-bottom: 3rem;
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
    margin-top: 56px;
    align-self: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #000;
  text-align: start;
  &:not(:first-child) {
    margin-bottom: 7rem;
  }
  &:nth-child(3) {
    margin-bottom: 3rem;
  }
  margin-right: 4rem;
  line-height: 150%;
  width: 100%;
  height: fit-content;
  p {
    font-size: 1rem;
    line-height: 180%;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

const PlombingImg = styled.img`
  width: 700px;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 4rem;
`;
export default About;