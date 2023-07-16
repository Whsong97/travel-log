import React from 'react';
import '../../App.css';
import Cards from '../cards';
import Footer from '../Footer';
import Navbar from '../navbar';

function Home() {
  return (
    <>
    <Navbar />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;