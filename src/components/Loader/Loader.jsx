import { Watch } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <Watch
        visible={true}
        height="60"
        width="60"
        radius="48"
        color="#902795"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className={s.loadingText}>
        Wait a little bit, we are looking for pictures for you...
      </p>
    </div>
  );
};

export default Loader;
