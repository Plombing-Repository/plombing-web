import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Home/Header';

const Container = styled.div`
  /* Add container styles if needed */
`;

const UnfixedHeader = styled.div`
  border: 0.574px solid #fff;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px -3px 40px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.041415214538574px);
`;

const MinText = styled.h6`
  color: white;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: -0.5px;
  margin-top: 160px;
  margin-bottom: -8px;
  margin-left: 256px;
`;

const MainText = styled.h1`
  color: white;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-right: 256px;
  margin-left: 256px;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const ReadMoreButton = styled.button`
  color: white;
  width: 117px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.518px solid #fff;
  background: rgba(255, 255, 255, 0.4);
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
