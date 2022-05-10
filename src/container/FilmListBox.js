import React, { useState } from 'react';
import FilmList from '../components/FilmList';
import ViewMore from '../components/ViewMore';

const FilmListBox = () => {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: 'Everything Everywhere All at Once',
      link: 'https://www.imdb.com/title/tt6710474/?ref_=rlm',
    },
    {
      id: 2,
      title: 'Firestarter',
      link: 'https://www.imdb.com/title/tt1798632/?ref_=rlm',
    },
    {
      id: 3,
      title: 'Father Stu',
      link: 'https://www.imdb.com/title/tt14439896/?ref_=rlm',
    },
  ]);
  return (
    <>
      <h1>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <FilmList filmsArray={films} />
      <ViewMore />
    </>
  );
};

export default FilmListBox;
