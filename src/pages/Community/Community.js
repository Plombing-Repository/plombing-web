import React, { useEffect, useState } from 'react';
import Title from './Title';
import ArticleItem from './Contents/Article/ArticleItem';
import Recommend from '../Community/Contents/Mountain/Recommend';
import styled from 'styled-components';
import Posts from '../Community/Posts/Posts';
import Writing from './Posts/Writing';
import Post from './Posts/Post';
import { useLocation } from 'react-router';

const Box = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 480px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIDgbk%2FbtsrEzOKa9k%2F3YMh3tu3P7EdDzAYOSZXK1%2Fimg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Buttons = styled.div`
  margin-top: -160px;
  margin-left: 256px;
  z-index: 2;
  position: relative;
`;

const Button = styled.button`
  mix-blend-mode: difference;
  z-index: 3;
  position: relative;
  padding: 10px 20px;
  background-color: transparent;
  border-color: transparent transparent
    ${(props) => (props.selected ? '#76e481' : '#bdbdbd')};
  color: ${(props) => (props.selected ? '#76e481' : '#bdbdbd')};
  width: 120px;
  height: 50px;
  margin-top: 120px;
  border-width: 10px;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.497px;
  cursor: pointer;
  margin-right: ${(props) => (props.iscontent ? '24px' : '0')};
`;

const Chapter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
`;

const Current = styled.p`
  margin-top: 48px;
  width: 100%;
  margin-left: 512px;
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.497px;
  text-align: left;
`;

const PostsContainer = styled.div``;

const Community = () => {
  const [selected, setSelected] = useState('content');
  const location = useLocation();
  useEffect(() => {
    setSelected(location.state?.selected);
  }, [location.state?.selected]);
  return (
    <Box>
      <Container>
        <Title />
      </Container>
      <Buttons>
        <Button
          type="button"
          onClick={() => setSelected('content')}
          selected={selected === 'content'}
          iscontent="true"
        >
          컨텐츠
        </Button>
        <Button
          type="button"
          onClick={() => setSelected('board')}
          selected={selected === 'board' || selected === 'writing'}
        >
          게시판
        </Button>
      </Buttons>

      {selected === 'content' && (
        <Chapter>
          <Current>요새 뜨는 환경 아티클을 둘러보세요!</Current>
          <ArticleItem />
          <Current>플로밍 할 만한 산을 추천해드려요!</Current>
          <Recommend />
        </Chapter>
      )}

      {selected === 'board' && (
        <PostsContainer>
          <Posts setSelect={setSelected} />
        </PostsContainer>
      )}

      {selected === 'writing' && (
        <PostsContainer>
          <Writing setSelect={setSelected} />
        </PostsContainer>
      )}

      {selected === 'post' && (
        <PostsContainer>
          <Post setSelect={setSelected} />
        </PostsContainer>
      )}
    </Box>
  );
};

export default Community;
