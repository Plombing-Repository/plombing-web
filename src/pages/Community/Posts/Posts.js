import React, { useState, useCallback, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import PostPreview from './PostPreview';
import postings from './postings.json';
import InfiniteScroll from './InfiniteScroll';
import NoSearchResult from './NoSearchResult';
import api from '../../../api/api';

const Board = (props) => {
  const setSelect = props.setSelect;
  const initialPostingList = postings.postings.slice(0, 3);
  // eslint-disable-next-line no-unused-vars
  const [postingList, setPostingList] = useState(initialPostingList);
  const [selected, setSelected] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]); // 검색 결과를 담을 배열
  const pageSize = 3; // 한 페이지에 보여줄 게시물 수 설정

  // eslint-disable-next-line no-unused-vars
  const [postInfos, setPostInfos] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(window.innerWidth);
  const [uploadText, setUploadText] = useState('');

  const inputRef = useRef(null);
  const [search, setSearch] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  // eslint-disable-next-line no-unused-vars
  const filteredPosts = postings.postings.filter(
    (postings) =>
      postings.question.toLowerCase().includes(searchValue.toLowerCase()) ||
      postings.description.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const SearchResult =
    searchResult.length === 0 ? (
      <NoSearchResult />
    ) : (
      searchResult.map((posting) => (
        <PostPreview
          key={posting.id}
          selected={posting.id === selected}
          id={posting.id}
          date={posting.date}
          likeCount={posting.likeCount}
          commentCount={posting.commentCount}
          question={posting.question}
          description={posting.description}
          answers={posting.answers}
          setSelected={setSelected}
        />
      ))
    );

  // 페이지 번호를 인자로 받아 해당 페이지에 해당하는 게시물 목록을 반환하는 함수
  function fetchPostings(pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, postings.postings.length);
    return postings.postings.slice(startIndex, endIndex);
  }

  function searchPostings(value) {
    try {
      console.log(value);

      // eslint-disable-next-line no-unused-vars
      const res = api
        .get(`/v1/post/search?keyword=${value}`)
        .then((response) => {
          console.log(response.data.data);
          const tmpSearchPostInfos = [];
          response.data.data.forEach((data) => {
            const {
              postIndex,
              createdAt,
              likeCount,
              postTitle,
              post,
              readCommentDtos,
            } = data;
            tmpSearchPostInfos.push({
              id: postIndex,
              date: createdAt,
              likeCount,
              question: postTitle,
              description: post,
              answers: readCommentDtos.map((dto) => dto.comment),
              commentCount: readCommentDtos.length,
            });
          });
          setSearchResult(tmpSearchPostInfos);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.error(err);
    }
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

    width < 600 ? setUploadText('글 작성') : setUploadText('게시물 작성하기');

    if (inputRef.current) {
      inputRef.current.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          setSearch(true);
          console.log(SearchResult);
        }
      });
    }
    async function fetchAllPosts() {
      try {
        const res = await api.get('/v1/post');
        console.log(res.data.data);
        const tmpPostInfos = [];
        res.data.data.forEach((data) => {
          const {
            postIndex,
            createdAt,
            likeCount,
            postTitle,
            post,
            readCommentDtos,
          } = data;
          tmpPostInfos.push({
            id: postIndex,
            date: createdAt,
            likeCount,
            question: postTitle,
            description: post,
            answers: readCommentDtos.map((dto) => dto.comment),
            commentCount: readCommentDtos.length,
          });
        });
        setPostInfos(tmpPostInfos);
        console.log(tmpPostInfos);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllPosts();
  }, []);

  const onClickUpButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Section>
        <BoardHeader>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              searchPostings(e.target.value);
            }}
            // onKeyDown={onEnterPress}
            ref={inputRef}
          />

          <img src="https://velog.velcdn.com/images/ea_st_ring/post/b262f333-3075-40ac-a4ae-763819125acc/image.svg" />
          <div>
            <p
              onClick={() => {
                setSelect('writing');
              }}
            >
              {uploadText}
            </p>
          </div>
        </BoardHeader>
        {search
          ? SearchResult
          : postInfos.map((posting) => (
              <>
                <PostPreview
                  key={posting.id}
                  selected={posting.id === selected}
                  id={posting.id}
                  date={posting.date}
                  likeCount={posting.likeCount}
                  commentCount={posting.commentCount}
                  question={posting.question}
                  description={posting.description}
                  answers={posting.answers}
                  setSelected={setSelected}
                />
                <InfiniteScroll
                  fetchMoreData={fetchMoreData}
                  hasMoreData={hasMoreData}
                />
              </>
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
  @media screen and (max-width: 500px) {
    padding: 0px 16px;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img:nth-child(2) {
    position: absolute;
    left: 250px;
  }
  div {
    display: flex;
    border-radius: 8px;
    padding: 12px 8px;
    width: 138px;
    height: 16px;
    justify-content: center;
    align-items: center;
    background-color: #99e28d;
    p {
      font-size: 0.9rem;
      margin: 0;
      font-weight: 600;
      line-height: 150%;
      text-align: center;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 60px 16px 0px 16px;
    margin-top: 110px;
    height: 100px;
    div {
      width: 80px;
    }
    div p {
      font-size: 14px;
      color: #1e1e1e;
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
  @media screen and (max-width: 500px) {
    margin-right: 10px;
    padding: 0px 0px 0px 20px;
    width: 360px;
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
  @media screen and (max-width: 500px) {
    bottom: 40px;
    right: 50px;
    width: 40px;
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
