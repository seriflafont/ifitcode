import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomerCarousel from './components/CustomerCarousel';
import EventsGrid from './components/EventsGrid';
import Equipment from './components/Equipment';
import Footer from './components/Footer';
import './styles/global.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CustomerCarousel />
      <EventsGrid />
      <Equipment />
      <Footer />
    </div>

  );
}

export default App;
