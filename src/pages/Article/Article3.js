import React from 'react';
import Format from './Format';
import articleInfo from './articles.json';
import { styled } from 'styled-components';

const Article3 = () => {
  const info = articleInfo.articles[2];
  const Content = () => (
    <Wrapper>
      {info.content1.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <img src="https://velog.velcdn.com/images/ea_st_ring/post/b59b8ede-c195-4846-b5c9-2fd01b5de7d8/image.svg" />
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

export default Article3;
