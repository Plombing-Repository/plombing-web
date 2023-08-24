import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mountains from './mountains.json'; // JSON 데이터를 가져옴
import PrevArrow from '../Article/assets/prev_btn.svg';
import NextArrow from '../Article/assets/next_btn.svg';

const RecommendItem = () => {
  const [slidesNumber, setSlidesToShow] = useState(3);
  const [buttonWidth, setButtonWidth] = useState(0);
  useEffect(() => {
    window.innerWidth <= 800 ? setSlidesToShow(1) : setSlidesToShow(3);
    window.innerWidth <= 800 ? setButtonWidth(45) : setButtonWidth(64);
    window.addEventListener('resize', () => {
      window.innerWidth <= 800 ? setSlidesToShow(1) : setSlidesToShow(3);
      window.innerWidth <= 800 ? setButtonWidth(45) : setButtonWidth(64);
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNumber,
    slidesToScroll: 1,
  };

  const slickRef = useRef(null);

  const onClickItem = useCallback((index) => {
    window.location.href = `/recommend/${index}`;
  }, []);

  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <Wrap>
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} alt="Previous Button" width={buttonWidth} />
      </PrevBtn>
      <Slider ref={slickRef} {...settings}>
        {mountains.mountains.map((mountain) => (
          <Item
            key={mountain.id}
            imageurl={mountain.imageUrl}
            onClick={() => {
              onClickItem(mountain.id);
            }}
            // 나머지 속성들은 스타일드 컴포넌트의 스타일 속성으로 전달
          >
            <InfoBox>
              <Title>{mountain.title}</Title>
              <Address>{mountain.address}</Address>
              <Info>
                <div>
                  <p>{mountain.level}</p>
                </div>
                <div>
                  <p>{mountain.time}</p>
                </div>
              </Info>
            </InfoBox>
          </Item>
        ))}
      </Slider>
      <NextBtn onClick={nextArrow}>
        <img src={NextArrow} alt="Next Button" width={buttonWidth} />
      </NextBtn>
    </Wrap>
  );
};

export default RecommendItem;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .slick-slider,
  .slick-list,
  .slick-track {
    height: 328px !important;
  }
  .slick-slider {
    max-width: 100vw;
    width: 100%;
    overflow: hidden !important;
  }
  .slick-slider.slick-initialized {
    width: fit-content !important;
  }
  .slick-list {
    width: 746px;
    height: 308px;
    @media screen and (max-width: 500px) {
      max-width: 246px;
    }
  }
  .slick-prev::before,
  .slick-next:before {
    opacity: 0;
    display: none;
  }
  @media (max-width: 800px) {
    .slick-list {
      width: 235px !important;
    }
    .slick-slider.slick-initialized {
      width: fit-content;
    }
  }
`;

const PrevBtn = styled.button`
  position: relative;
  left: 0;
  border: none;
  background-color: white;
  margin-right: 9px;
`;

const NextBtn = styled.button`
  right: 0;
  border: none;
  background-color: white;
  margin-left: 9px;
`;

const Item = styled.div`
  width: 228px !important;
  height: 288px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const InfoBox = styled.div`
  width: 230px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin-top: 0;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Address = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 4px;
  margin-bottom: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
  }
  div {
    width: 60px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:first-child {
      margin-right: 8px;
    }
  }
`;
