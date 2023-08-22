import React from 'react';
import Format from './Format';
import articleInfo from './articles.json';
import { styled } from 'styled-components';

const Article4 = () => {
  const info = articleInfo.articles[3];
  const Content = () => (
    <Wrapper>
      {info.content1.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FysdzQ%2FbtsrIgceTd2%2FOjyFaa6RlwNHEFF5hlj201%2Fimg.png" />
      {info.content2.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </Wrapper>
  );
  return (
    <div>
      <Format
        id={info.id}
        background={info.background}
        title={info.title}
        info={`${info.date} by ${info.writer}`}
        content={<Content />}
        source={info.source}
      />
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

export default Article4;
