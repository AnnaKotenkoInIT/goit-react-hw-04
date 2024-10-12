import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './SearchBar.module.css';

const SearchBar = ({ setQuery, notify }) => {
  // Додано notify як пропс
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue.trim()) {
      notify();
    } else {
      setQuery(inputValue);
      resetInput();
    }
  };

  const resetInput = () => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      notify();
    } else {
      setQuery(inputValue);
      resetInput();
    }
  };

  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputWrapper}>
            <button type="button" className={s.btn} onClick={handleButtonClick}>
              <ImSearch size={25} className={s.icon} />
            </button>
            <input
              className={s.input}
              type="text"
              onChange={handleChange}
              name="topic"
              autoComplete="off"
              autoFocus
              value={inputValue}
              placeholder="Search images and photos..."
            />
          </div>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
