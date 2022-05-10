import React from 'react';
import Film from './Film';

const FilmList = ({ filmsArray }) => {
  const filmsArrayNodes = filmsArray.map((film) => {
    return (
      <li>
        <Film key={film.id} title={film.title} link={film.link} />
      </li>
    );
  });
  return (
    <>
      <ul>{filmsArrayNodes}</ul>
    </>
  );
};

export default FilmList;
