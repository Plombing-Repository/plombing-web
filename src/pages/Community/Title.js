import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Home/Header';

const Container = styled.div`
  /* Add container styles if needed */
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const UnfixedHeader = styled.div`
  border: 0.5px solid #fff;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px -3px 40px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const MinText = styled.h6`
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: -0.5px;
  margin-top: 160px;
  margin-bottom: -8px;
  margin-left: 256px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    font-weight: 400;
    margin-top: 128px;
    margin-left: 24px;
  }
`;

const MainText = styled.h1`
  color: white;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-right: 256px;
  margin-left: 256px;
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: -10px;
    margin-left: 24px;
    margin-right: 0px;
    width: 350px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const ReadMoreButton = styled.button`
  color: white;
  width: 117px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 10px;
    font-weight: 400;
    width: 68px;
    height: 20px;
    border-radius: 4px;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 24px;
    margin-right: 20px;
  }
`;

const Title = () => (
  <Container>
    <UnfixedHeader>
      <Header />
    </UnfixedHeader>
    <MinText>현재 가장 인기있는 아티클이에요</MinText>
    <Content>
      <MainText>비 때문에 몸살 앓는 &lsquo;자연&rsquo;?</MainText>
      <Link to="/article/3">
        <ReadMoreButton>read more</ReadMoreButton>
      </Link>
    </Content>
  </Container>
);

export default Title;
