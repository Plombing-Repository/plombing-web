import React from 'react';
import styled from 'styled-components';
import recommendData from './recommend.json';
import Header from '../../../Home/Header';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';

// Styled components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Banner = styled.div`
  width: 100%;
  height: 420px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const BannerContent = styled.div`
  width: 1072.05px;
  max-width: 100%;
  color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
`;

const MiniTitle = styled.h2`
  font-size: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  white-space: pre-line;
  line-height: 1.5;
`;

const Address = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  text-align: right;
`;

const ContentSection = styled.section`
  width: 1072.05px;
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: auto;
  text-align: left;

  h3 {
    text-align: left;
    font-size: 1.5rem;
  }

  h6 {
    margin-top: 8px;
    text-align: left;
    font-size: 1rem;
  }
`;

const ContentText = styled.p`
  margin-bottom: 20px;
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

const GreenBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 2px solid #99e28d;
  padding: 24px 8px;
`;

const ContentImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  text-align: left;
`;

// Recommendation Component
const Recommendation = () => {
  const { id } = useParams();
  const index = parseInt(id) - 1;
  if (!recommendData.recommend || !recommendData.recommend[index]) {
    return <p>추천 정보를 찾을 수 없습니다.</p>;
  }
  const {
    background,
    minititle,
    title,
    address,
    content1,
    course,
    level,
    necessary,
    things,
    coursetitle,
    detail,
    content2,
    additional,
  } = recommendData.recommend[index];

  return (
    <Container>
      <Header />
      <Banner style={{ backgroundImage: `url(${background})` }}>
        <BannerContent>
          <MiniTitle>{minititle}</MiniTitle>
          <Title>{title}</Title>
          <Address>{address}</Address>
        </BannerContent>
      </Banner>
      <ContentSection>
        <ContentText>{content1}</ContentText>
        <h3>{course}</h3>
        <h6>{level}</h6>
        <h3>{necessary}</h3>
        <h6>{things}</h6>
        <h3>{coursetitle}</h3>
        <GreenBox>{detail}</GreenBox>
        <ContentImage src={content2} alt="Content Image" />
        <h6>{additional}</h6>
        <h3>다른 산도 추천받아 보세요.</h3>
        <Recommend />
      </ContentSection>
    </Container>
  );
};

export default Recommendation;
