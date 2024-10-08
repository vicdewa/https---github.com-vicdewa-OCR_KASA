import React from 'react';
import Banner from '../components/Banner';
import homeImage from '../assets/Banner.png';
import Card from '../components/Card';
import logements from '../data.json';  
import './Home.css'; 

const Home = () => {
  return (
    <>
      <section>
        <Banner image={homeImage} title="Chez vous, partout et ailleurs"/>
      </section>
      <section>
        <Card logements={logements} />
      </section>
    </>
  );
};

export default Home;