import React from 'react';

const Home = ({ name, city }) => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>{name}Liza is a Web Developer from {city} New York</h1>
    </div>
  );
}

export default Home;

