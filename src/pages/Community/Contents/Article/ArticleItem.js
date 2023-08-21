import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import articles from './articles.json';
import PrevArrow from './assets/prev_btn.svg';
import NextArrow from './assets/next_btn.svg';

const ArticleItem = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slickRef = useRef(null);
  const onClickItem = useCallback((index) => {
    window.location.href = `/article/${index}`;
  }, []);
  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <Wrap>
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} />
      </PrevBtn>
      <Slider ref={slickRef} {...settings}>
        {articles.articles.map((article) => (
          <Item
            key={article.id}
            onClick={() => {
              onClickItem(article.id);
            }}
          >
            <Thumbnail src={article.background}></Thumbnail>
            <Class>환경 아티클</Class>
            <Title>{article.title}</Title>
            <Info>
              <p>{article.date}</p>
              <p>by {article.writer}</p>
            </Info>
          </Item>
        ))}
      </Slider>
      <NextBtn onClick={nextArrow}>
        <img src={NextArrow} />
      </NextBtn>
    </Wrap>
  );
};

export default ArticleItem;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  .slick-slider,
  .slick-list,
  .slick-track {
    height: 280px !important;
  }
  .slick-list {
    width: 776px;
    height: 250px;
  }
  .slick-prev::before,
  .slick-next:before {
    opacity: 0;
    display: none;
  }
`;

const PrevBtn = styled.button`
  position: relative;
  left: 0;
  border: none;
  background-color: white;
  margin-right: 36px;
`;

const NextBtn = styled.button`
  right: 0;
  border: none;
  background-color: white;
  margin-left: 36px;
`;

const Item = styled.div`
  width: 248px !important;
  height: 248px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0.869px solid #c4c4c4;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const Thumbnail = styled.img`
  width: 248px;
  height: 150px;
  flex-shrink: 0;
  margin: 0 !important;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
  background: rgba(0, 0, 0, 0.2);
`;

const Class = styled.p`
  color: #575757;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 14px;
  margin-bottom: 0;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin-top: 0;
  margin-bottom: 4px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  }
`;
