import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({ fetchMoreData, hasMoreData }) => {
  const observer = useRef();
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (lastElementRef.current) {
      if (observer.current) observer.current.disconnect();

      if (hasMoreData) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            fetchMoreData();
          }
        });
        observer.current.observe(lastElementRef.current);
      }
    }
  }, [fetchMoreData, hasMoreData]);

  return <div ref={lastElementRef}></div>;
};

export default InfiniteScroll;
