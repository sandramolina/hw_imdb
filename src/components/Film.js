import React from 'react';

const Film = ({ title, link }) => {
  return (
    <>
      <a href={link} target='_blank'>
        {title}
      </a>
    </>
  );
};

export default Film;
