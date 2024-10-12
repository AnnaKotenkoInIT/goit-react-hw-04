import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, totalImages, hasSearched, openModal }) => {
  const handleImageClick = image => {
    openModal(image);
  };

  return (
    <>
      {totalImages === 0 && hasSearched && (
        <h2 className={s.warning}>
          Nothing found. Try to find something else :({' '}
        </h2>
      )}
      <ul className={s.list}>
        {images.map(image => (
          <li key={image.id} className={s.item}>
            <ImageCard image={image} onClick={() => handleImageClick(image)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
