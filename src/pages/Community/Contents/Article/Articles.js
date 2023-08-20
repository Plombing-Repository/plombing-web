import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';

const Articles = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const articlesData = [
    { id: '1', content: <Article1 /> },
    { id: '2', content: <Article2 /> },
    { id: '3', content: <Article3 /> },
  ];

  useEffect(() => {
    const article = articlesData.find((article) => article.id === id);
    setArticle(article);
  }, [id]);
  if (!article) return <div>존재하지 않는 게시글입니다.</div>;
  return <div>{article.content}</div>;
};

export default Articles;
