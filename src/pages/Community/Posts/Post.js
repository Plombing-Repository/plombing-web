import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../Title';

const Post = (props) => {
  const location = useLocation();
  const { question, description, date, answers, likeCount } = location.state;
  const [input, setInput] = useState('');
  const [tmpLikeCount, setTmpLikeCount] = useState(likeCount);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const onClickLike = () => {
    // TODO: API POST
    if (tmpLikeCount === likeCount) {
      setTmpLikeCount(tmpLikeCount + 1);
    } else {
      setTmpLikeCount(likeCount);
    }
  };

  const onClickBack = () => {
    navigate('/community', {
      state: {
        selected: 'board',
      },
    });
  };

  const onClickPost = () => {
    // TODO: API POST
    console.log(input);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 및 배너 */}
      <Container>
        <Title />
      </Container>
      <Buttons>
        <Button
          type="button"
          onClick={() => {
            navigate('/community', {
              state: {
                selected: 'content',
              },
            });
          }}
          iscontent="true"
        >
          컨텐츠
        </Button>
        <Button type="button" onClick={onClickBack} selected={true}>
          게시판
        </Button>
      </Buttons>

      {/* 게시글 */}
      <Section>
        <h3>
          <span>Q</span>
          {question}
        </h3>
        <DescriptionBox>
          <h4>{description}</h4>
        </DescriptionBox>
        <InfoBox>
          <InfoFormat>
            <div>
              <span>{date}</span>
              <img src="https://velog.velcdn.com/images/ea_st_ring/post/76107ac3-37b1-4cdb-9c3c-d88e67f366a0/image.svg" />
              <h6>답변</h6>
              <span>{answers.length}</span>
            </div>
            <div
              onClick={onClickLike}
              style={{
                backgroundColor:
                  tmpLikeCount === likeCount ? '#fff' : '#76e481',
              }}
            >
              나도 궁금해요
              <span
                style={{
                  color: tmpLikeCount === likeCount ? '#76e481' : '#fff',
                }}
              >
                {tmpLikeCount}
              </span>
            </div>
          </InfoFormat>
        </InfoBox>

        {/* 답변 작성 */}
        {answers.map((answer, index) => (
          <AnswerBox key={index}>
            <span>A</span>
            <p>{answer}</p>
          </AnswerBox>
        ))}

        <TextInput
          placeholder="답변을 작성해 플로머들과 정보를 공유해 주세요."
          onChange={handleInput}
        />
        <LetterCount>
          <span>{input.length}</span>/ 500
        </LetterCount>

        {/* 버튼 */}
        <ButtonBox>
          <GoBackButton onClick={onClickBack}>목록으로</GoBackButton>
          <PostButton onClick={onClickPost}>답변 올리기</PostButton>
        </ButtonBox>
      </Section>
    </>
  );
};

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 60px 240px;
  box-sizing: border-box;
  margin-top: 60px;
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  span {
    font-size: 1.5rem;
    color: #76e481;
    margin-right: 12px;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 40px 0px;
  box-sizing: border-box;
  letter-spacing: 0.5px;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 24px;
`;

const InfoFormat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: 16px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  h6 {
    font-size: 1rem;
    margin: 0 8px 0 0;
    color: #727272;
  }
  span {
    font-size: 1rem;
    color: #727272;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  div:nth-child(2) {
    width: 140px;
    height: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 4px 8px;
    cursor: pointer;
    span {
      color: #76e481;
      margin-left: 8px;
      margin-right: 0;
    }

    transition: all 0.1s ease-in-out;
    &:active {
      background-color: #76e481;
      transform: scale(0.98) translateY(2px);
      span {
        transition: all 0.1s ease-in-out;
      }
    }
  }
`;

const AnswerBox = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: start;
  width: 100%;
  height: fit-content;
  flex-direction: row;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #76e481;
  margin-top: 24px;
  p {
    margin-top: 4px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 180%;
    font-size: 1rem;
  }
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
  &:nth-child(1) {
    border-color: '#76e481';
    color: '#76e481';
  }
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

const TextInput = styled.textarea`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  border: 1px solid #727272;
  padding: 20px 36px;
  box-sizing: border-box;
  margin-top: 128px;
  resize: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  color: #000;
  line-height: 150%;
  &::placeholder {
    color: #5e5e5e;
    font-family: 'Pretendard';
  }
`;

const LetterCount = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 8px;
  font-size: 1rem;
  span {
    font-size: 1rem;
    color: #76e481;
    margin: 0 4px 0 0;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 36px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 64px;
`;

const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #76e481;
  background-color: #f8fff9;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #99e28d;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
`;
export default Post;
