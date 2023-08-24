import React, { useState } from 'react';
import { styled } from 'styled-components';

const Writing = (props) => {
  const setSelect = props.setSelect;
  const [titleInput, setTitleInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const handleInput = (e, setValue) => {
    setValue(e.target.value);
  };
  const onClickBack = () => {
    setSelect('board');
  };

  const onClickPost = () => {
    // TODO: API POST
    console.log(titleInput, descInput);
  };
  return (
    <Section>
      <h1>게시글 작성</h1>
      <h2 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>제목</h2>
      <TitleBox>
        <TitleInput
          placeholder="제목을 입력하세요."
          onChange={(e) => handleInput(e, setTitleInput)}
          maxLength={50}
        />
        <LetterCount
          style={{
            width: '100px',
            position: 'absolute',
            right: '260px',
            top: '270px',
          }}
        >
          <span>{titleInput.length}</span>/ 50
        </LetterCount>
      </TitleBox>
      <h2 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>내용</h2>
      <TextInput
        placeholder="내용을 입력하세요."
        onChange={(e) => handleInput(e, setDescInput)}
        maxLength={1000}
      />
      <LetterCount>
        <span>{descInput.length}</span>/ 1000
      </LetterCount>
      <ButtonBox>
        <GoBackButton onClick={onClickBack}>목록으로</GoBackButton>
        <PostButton onClick={onClickPost}>등록하기</PostButton>
      </ButtonBox>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 60px 240px;
  box-sizing: border-box;
  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 80px;
  }
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  span {
    font-size: 1.5rem;
    color: #76e481;
    margin-right: 12px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    h1 {
      font-size: 1.2rem;
      margin-bottom: 40px;
    }
  }
`;
const TitleBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleInput = styled.textarea`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid #727272;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 32px;
  resize: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  color: #000;
  line-height: 150%;
  &::placeholder {
    color: #5e5e5e;
    font-family: 'Pretendard';
  }
  &:focus {
    outline: 2px solid #76e481;
    border: none;
  }
  @media (max-width: 768px) {
    height: 50px;
    font-size: 0.9rem;
  }
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #727272;
  padding: 20px 36px;
  box-sizing: border-box;
  margin-top: 16px;
  resize: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  color: #000;
  line-height: 150%;
  &::placeholder {
    color: #5e5e5e;
    font-family: 'Pretendard';
  }
  &:focus {
    outline: 2px solid #76e481;
    border: none;
  }
  @media (max-width: 768px) {
    height: 200px;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    width: 200px;
    margin-bottom: 20px;
  }
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

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export default Writing;
