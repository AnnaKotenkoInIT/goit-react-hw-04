import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ setPage }) => {
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <button onClick={handleLoadMore} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
