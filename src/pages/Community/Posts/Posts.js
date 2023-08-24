import React, { useState, useCallback, useEffect } from 'react';
import { styled } from 'styled-components';
import PostPreview from './PostPreview';
import postings from './postings.json';
import InfiniteScroll from './InfiniteScroll';

const Board = (props) => {
  const setSelect = props.setSelect;
  const initialPostingList = postings.postings.slice(0, 3);
  const [postingList, setPostingList] = useState(initialPostingList);
  const [selected, setSelected] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 3; // 한 페이지에 보여줄 게시물 수 설정

  // 페이지 번호를 인자로 받아 해당 페이지에 해당하는 게시물 목록을 반환하는 함수
  function fetchPostings(pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, postings.postings.length);
    return postings.postings.slice(startIndex, endIndex);
  }

  const fetchMoreData = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
    setIsLoading(true); // 로딩 시작
    const newPostings = fetchPostings(currentPage + 1);

    if (newPostings.length === 0) {
      setHasMoreData(false);
      setIsLoading(false); // 로딩 종료
      return;
    }

    setTimeout(() => {
      setPostingList((prev) => [...prev, ...newPostings]);
      setIsLoading(false); // 로딩 종료
    }, 500);
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const UpButton = document.querySelector('.upButton');
      UpButton &&
        (window.scrollY > 500
          ? UpButton.classList.add('active')
          : UpButton.classList.remove('active'));
    });
  }, []);

  const onClickUpButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Section>
        <BoardHeader>
          <SearchInput placeholder="검색어를 입력하세요" />
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/b262f333-3075-40ac-a4ae-763819125acc/image.svg" />
          <div>
            <p
              onClick={() => {
                setSelect('writing');
              }}
            >
              <span>게시글</span> <span>작성하기</span>
            </p>
          </div>
        </BoardHeader>
        {postingList.map((posting, index) => (
          <PostPreview
            key={index}
            selected={index + 1 === selected}
            id={posting.id}
            date={posting.date}
            likeCount={posting.likeCount}
            commentCount={posting.commentCount}
            question={posting.question}
            description={posting.description}
            answers={posting.answers}
            setSelected={setSelected}
          />
        ))}
        <InfiniteScroll
          fetchMoreData={fetchMoreData}
          hasMoreData={hasMoreData}
        />
      </Section>
      <UpButton
        src="https://velog.velcdn.com/images/ea_st_ring/post/0d58758d-1570-463e-a1db-812b010f4125/image.svg"
        className="upButton"
        onClick={onClickUpButton}
      />
      {isLoading && (
        <LoadingContainer>
          <img
            src="https://velog.velcdn.com/images/ea_st_ring/post/7d1e83d2-18fb-479b-9550-4fcf21936ee3/image.gif"
            alt="로딩 중"
            width={100}
            height={100}
          />
        </LoadingContainer>
      )}
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

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
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
      cursor: pointer;
      span {
        display: inline; // 기본적으로 inline으로 설정
      }

      @media (max-width: 768px) {
        span:nth-child(1) {
          display: block; // 768px 이하에서는 "게시글" 뒤에 줄바꿈 추가
        }
      }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    padding: 0 12px;
  }
`;

const UpButton = styled.img`
  display: none;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  position: fixed;
  bottom: 70px;
  right: 100px;
  cursor: pointer;
  &.active {
    display: flex;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
`;
export default Board;
