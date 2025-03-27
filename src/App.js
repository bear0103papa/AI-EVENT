import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Keynotes from './components/Keynotes';
import Forums from './components/Forums';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Keynotes />
      <Forums />
      <Speakers />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
