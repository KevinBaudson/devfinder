import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-input">
        <input
          className='input-name'
          type="text"
          placeholder='Search GitHub username...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Search" className='btn-submit' />
      </div>
    </form>
  );
};

export default SearchInput;
