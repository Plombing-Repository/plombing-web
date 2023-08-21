import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dummy from '../../Dummy.json';
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

  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <Wrap>
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} />
      </PrevBtn>
      <Slider ref={slickRef} {...settings}>
        {Dummy.recommends.map((recommend) => (
          <Item key={recommend.id} thumbnail={recommend.img}>
            <Course>{recommend.course}</Course>
            <Address>{recommend.address}</Address>
            <Detail>
              <div>
                <p>{recommend.level}</p>
              </div>
              <div>
                <p>{recommend.time}</p>
              </div>
            </Detail>
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
  .slick-list {
    width: 776px;
    height: 313px;
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
  height: 316px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Course = styled.p`
  color: #fff;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.5px;
  margin-top: 160px;
  margin-bottom: 4px;
`;

const Address = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.5px;
  margin-top: 0;
  margin-bottom: 14px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  margin-bottom: 40px;
  div {
    border-radius: 32px;
    border: 1px solid #fff;
    display: flex;
    padding: 4px 20px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin: 0 0;
  }
`;
