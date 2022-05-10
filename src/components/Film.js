import React from 'react';

const Film = ({ title, link }) => {
  return (
    <>
      <a href={link} target='_blank'>
        Movie Title: {title}
      </a>
    </>
  );
};

export default Film;
