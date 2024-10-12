import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; // Використовуємо toast
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    fetchImagesData(query, page);
  }, [query, page]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  const fetchImagesData = async (query, page) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const { results, total } = await fetchImages(query, page);
      setImages(prev => [...prev, ...results]);
      setTotalImages(total);
    } catch (error) {
      console.error('Error with displaying the pictures:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  const notify = () => toast.error('Please, type what you want to find!');

  const handleSetQuery = searchValue => {
    setQuery(searchValue);
    resetState();
  };

  const resetState = () => {
    setImages([]);
    setPage(1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} notify={notify} />
      <ImageGallery
        images={images}
        totalImages={totalImages}
        hasSearched={hasSearched}
        openModal={openModal}
      />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
