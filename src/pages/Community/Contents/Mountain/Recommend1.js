import React from 'react';
import recommendData from './recommend.json'; // recommendData로 이름 변경
import Header from '../../../Home/Header';
import Recommend from './Recommend';
import styles from './Recommends.module.css';

const Recommend1 = () => {
  const { background, minititle, title, address, content1, content2 } =
    recommendData.recommend[0]; // recommendData로 변경

  return (
    <div className={styles.container}>
      <Header />
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.bannerContent}>
          <h6 className={styles.minititle}>{minititle}</h6>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.address}>{address}</p>
        </div>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.contentText}>{content1}</p>
        <h3>코스 난이도</h3>
        <h6>최하</h6>
        <h3>필요한 준비물</h3>
        <h6>쓰레기 봉투, 집게, 장갑, 손세정제, 긴 바지</h6>
        <h3>추천 코스</h3>
        <h6 className={styles.greenbox}>
          한성과학고등학교 - 능안정 - 봉수대 - 숲속무대 - 북카페쉼터 - 지하철
          3호선 독립문역
        </h6>
        <img
          className={styles.contentImage}
          src={content2}
          alt="Content Image"
        />
        <h6>
          *번외 코스 -
          한성과학고등학교-능안정-봉수대-숲속무대-북카페쉼터-무악재하늘다리-인왕산-서대문형무소
        </h6>
        <h3>다른 산도 추천받아 보세요.</h3>
        <div className={styles.recommendWrapper}>
          <Recommend />
        </div>
      </div>
    </div>
  );
};

export default Recommend1;
