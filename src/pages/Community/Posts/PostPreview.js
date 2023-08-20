import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const PostPreview = (props) => {
  const {
    selected,
    id,
    date,
    likeCount,
    commentCount,
    question,
    description,
    answers,
    setSelected,
  } = props;

  const navigate = useNavigate();
  const onClickPost = (e) => {
    if (selected === true) {
      navigate(`/community/${e.currentTarget.id}`, {
        state: {
          likeCount,
          date,
          question,
          description,
          answers,
        },
      });
    }
    setSelected(e.currentTarget.id * 1);
  };
  return (
    <Format selected={selected} key={id} id={id} onClick={onClickPost}>
      <h3>
        <span>Q</span>
        {question}
      </h3>
      <InfoBox>
        <InfoFormat>
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/6b217544-4546-4600-b326-284019531e3f/image.svg" />
          <h6>나도 궁금해요</h6>
          <span>{likeCount}</span>
        </InfoFormat>
        <InfoFormat>
          <img src="https://velog.velcdn.com/images/ea_st_ring/post/76107ac3-37b1-4cdb-9c3c-d88e67f366a0/image.svg" />
          <h6>답변</h6>
          <p>{commentCount}</p>
        </InfoFormat>
      </InfoBox>
      {selected && (
        <TransitionGroup>
          {answers.map((answer, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="answer"
              unmountOnExit
            >
              <AnswerBox>
                <span>A</span>
                <p>{answer}</p>
              </AnswerBox>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </Format>
  );
};

const Format = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.selected ? 'fit-content' : '100%')};
  padding: 20px 40px;
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 20px;
  border: ${(props) =>
    props.selected ? '1px solid #76e481' : '1px solid #727272'};
  background: #fff;
  transition: all 1s ease-in-out;
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  span {
    font-size: 1.5rem;
    color: #76e481;
    margin-right: 12px;
  }
  & + & {
    margin-top: 24px;
  }
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: row;
  margin-top: 24px;
`;

const InfoFormat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  h6 {
    font-size: 1rem;
    margin: 0 8px 0 0;
  }
  span {
    font-size: 1rem;
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

export default PostPreview;