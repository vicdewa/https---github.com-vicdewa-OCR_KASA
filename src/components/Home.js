import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data.json';  
import './Home.css'; 

const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <Card logements={logements} />
      </section>
    </>
  );
};

export default Home;