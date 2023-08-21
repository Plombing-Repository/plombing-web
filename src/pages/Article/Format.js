/* eslint-disable no-unused-vars */
import React, { useParams, useState } from 'react';
import { styled } from 'styled-components';
import Header from '../Home/Header';
import ArticleItem from './ArticleItem';

const Format = (props) => {
  return (
    <div>
      <Header />
      <Banner $background={props.background}>
        <h1>{props.title}</h1>
        <h2>{props.info}</h2>
      </Banner>
      <Contents>
        {props.content}
        <Divider />
        <Source>
          {props.source.split('\n').map((line, index) => (
            <h6 key={index}>{line}</h6>
          ))}
        </Source>
        <Title>
          <h3>다른 환경 아티클을 둘러보세요.</h3>
        </Title>
      </Contents>
      <ArticleSection>
        <ArticleItem style={{ margin: '0px 240px' }} />
      </ArticleSection>
    </div>
  );
};

const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 120px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: 440px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: ${(props) => `url(${props.$background})`};
  background-size: cover;
  background-position: center;
  padding-bottom: 40px;
  color: white;
  h1 {
    font-size: 2rem;
    line-height: 150%;
    font-weight: 500;
    width: 100%;
    padding: 0px 240px;
    box-sizing: border-box;
    margin-top: 400px;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: #fff;
    width: 100%;
    padding: 0px 240px;
    box-sizing: border-box;
    text-align: right;
  }
`;

const Contents = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 440px;
  width: 100%;
  height: fit-content;
  padding: 60px 240px;
  color: 'black';
  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }
  p {
    font-size: 1rem;
    line-height: 180%;
    font-weight: 500;
  }
`;

const Divider = styled.div`
  width: 943px;
  height: 1px;
  background-color: #111;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 32px;
`;

const Title = styled.div`
  margin-bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    color: #1e1e1e;
    margin-bottom: 0px;
  }
  div button {
    color: #1e1e1e;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Source = styled.div`
  h6 {
    line-height: 100%;
    margin-top: 0;
    margin-bottom: 0.4rem;
    font-size: 0.7rem;
    color: #3f3f3f;
  }
  margin-top: 0;
  margin-bottom: 8rem;
`;

export default Format;
