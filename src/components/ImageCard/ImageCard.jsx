import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        key={image.id}
        style={{ cursor: 'pointer' }}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
