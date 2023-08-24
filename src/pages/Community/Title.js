import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Home/Header';

const Container = styled.div`
  /* Add container styles if needed */
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

  @media screen and (max-width: 800px) {
    margin-left: 16px;
    font-size: 16px;
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

  @media screen and (max-width: 800px) {
    margin-left: 16px;
    font-size: 20px;
    white-space: nowrap;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column; // 이 부분 변경
    justify-content: space-between; // 콘텐츠 사이에 공간을 분배
    align-items: center; // 아이템들을 중앙으로 정렬
    margin-left: 10px;
    width: calc(100% - 32px); // 좌우 마진 16px씩 감안하여 전체 너비 설정
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
  margin-right: -120px;
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
