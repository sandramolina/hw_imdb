import React from 'react';

const Film = ({ title, link }) => {
  return (
    <>
      <a href={link}>Movie Title: {title}</a>
    </>
  );
};

export default Film;
