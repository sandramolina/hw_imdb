import React, { useState } from 'react';
import FilmForm from '../components/FilmForm';
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

  const addFilm = (postedFilm) => {
    postedFilm.id = Date.now();
    const updatedFilm = [...films, postedFilm];
    setFilms(updatedFilm);
  };

  return (
    <>
      <h1 className='title'>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <FilmList filmsArray={films} />
      <ViewMore />
      <h2 className='subtitle'>Add a new film to the list</h2>
      <FilmForm postFilm={addFilm} />
    </>
  );
};

export default FilmListBox;
