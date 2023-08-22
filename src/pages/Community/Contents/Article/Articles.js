import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';

const Articles = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const articlesData = [
    { id: '1', content: <Article1 /> },
    { id: '2', content: <Article2 /> },
    { id: '3', content: <Article3 /> },
    { id: '4', content: <Article4 /> },
    { id: '5', content: <Article5 /> },
    { id: '6', content: <Article6 /> },
  ];

  useEffect(() => {
    const article = articlesData.find((article) => article.id === id);
    setArticle(article);
  }, [id]);
  if (!article) return <div>존재하지 않는 게시글입니다.</div>;
  return <div>{article.content}</div>;
};

export default Articles;
