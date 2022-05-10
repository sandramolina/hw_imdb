import React, { useState } from 'react';

const FilmForm = ({ postFilm }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleLinkChange = (event) => setLink(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const titleToSubmit = title.trim();
    const linkToSubmit = link;

    postFilm({ title: titleToSubmit, link: linkToSubmit });

    setTitle('');
    setLink('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        value={title}
        placeholder='e.g Blackpanter'
        onChange={handleTitleChange}
        required
      ></input>
      <input
        type='url'
        value={link}
        placeholder='https://www.imdb.com/title/tt6710474/?ref_=rlm'
        onChange={handleLinkChange}
        required
      ></input>
      <input type='submit' value='Post' />
    </form>
  );
};

export default FilmForm;
