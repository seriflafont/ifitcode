import React from 'react';
import Header from './components/Header';
import CustomerCarousel from './components/CustomerCarousel';
import EventsGrid from './components/EventsGrid';
import Equipment from './components/Equipment';
import Footer from './components/Footer';
import './styles/global.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-wrapper module-wrapper">
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1>The right personal training, right in your own home</h1>
          <button>Join iFit Coach</button>
        </div>
      </div>
      <CustomerCarousel />
      <EventsGrid />
      <Equipment />
      <Footer />
    </div>

  );
}

export default App;
