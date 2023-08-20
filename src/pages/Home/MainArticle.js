import React, { useCallback } from 'react';
import { styled } from 'styled-components';
import articleInfo from '../Community/Contents/Article/articles.json';
const MainArticle = () => {
  const articles = articleInfo.articles;
  const onClickItem = useCallback((index) => {
    window.location.href = `/article/${index}`;
  }, []);
  return (
    <Wrapper>
      <ArticleBox>
        {articles.map(
          (article) =>
            article.id <= 3 && (
              <Item
                key={article.id}
                article={article}
                onClick={() => {
                  onClickItem(article.id);
                }}
              >
                <Thumbnail src={article.background} />
                <InfoBox>
                  <Class>환경 아티클</Class>
                  <Title>{article.title}</Title>
                  <h6>{article.headline}</h6>
                  <Info>
                    <p>{article.date}</p>
                    <p>by {article.writer}</p>
                  </Info>
                </InfoBox>
              </Item>
            ),
        )}
      </ArticleBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 660px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
  & + & {
    margin-top: 10px;
  }
  @media screen and (max-width: 500px) {
    width: 360px;
    height: 172px;
    flex-direction: row;
  }
`;

const ArticleBox = styled.div`
  width: 660px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 220px;
  height: 140px;
  margin: 20px;
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 120px;
    height: 140px;
  }
`;

const Class = styled.p`
  color: #575757;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 20px;
  margin-bottom: 4px;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    margin-top: 32px;
    margin-left: 0;
    margin-bottom: 12px;
  }
`;

const InfoBox = styled.div`
  width: 326px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h6 {
    color: #3f3f3f;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 12px;
    margin-left: 20px;
    height: 44px;
    @media screen and (max-width: 500px) {
      margin-left: 0;
      margin-bottom: 0;
      font-size: 0.5rem;
    }
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin-top: 0;
  margin-bottom: 4px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    margin-left: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  p {
    color: #3f3f3f;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-right: 20px;
    margin-top: 0;
    @media screen and (max-width: 500px) {
      font-size: 0.4rem;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;
export default MainArticle;
