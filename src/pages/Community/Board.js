import React, { useState } from 'react';
import Header from '../Home/Header';
import { styled } from 'styled-components';
import Post from './Post';
import postings from './postings.json';

const Board = () => {
  const postingList = postings.postings;
  const [selected, setSelected] = useState('');

  return (
    <div>
      <Header />
      <Section>
        <BoardHeader>
          <SearchInput placeholder="검색어를 입력하세요" />
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/b262f333-3075-40ac-a4ae-763819125acc/image.svg" />
          <div>
            <p>게시글 작성하기</p>
          </div>
        </BoardHeader>
        {postingList.map((posting, index) => (
          <Post
            key={index}
            selected={index + 1 === selected}
            id={posting.id}
            likeCount={posting.likeCount}
            commentCount={posting.commentCount}
            question={posting.question}
            answers={posting.answers}
            setSelected={setSelected}
          />
        ))}
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 60px 240px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const BoardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img:nth-child(2) {
    position: absolute;
    left: 250px;
  }
  div {
    display: flex;
    border-radius: 16px;
    padding: 12px 8px;
    width: 138px;
    height: 18px;
    justify-content: center;
    align-items: center;
    background-color: #99e28d;
    p {
      font-size: 1rem;
      margin: 0;
      font-weight: 600;
      line-height: 150%;
      text-align: center;
    }
  }
`;

const SearchInput = styled.input`
  width: 700px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #76e481;
  text-align: start;
  padding: 0 48px;
  margin-right: 32px;
`;
export default Board;
