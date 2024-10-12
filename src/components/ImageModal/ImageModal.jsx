import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, image }) => {
  return (
    <Modal
      className={s.modalContainer}
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName={s.overlay}
      contentLabel="Image modal"
      shouldCloseOnOverlayClick={true}
    >
      {image && (
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className={s.img}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
