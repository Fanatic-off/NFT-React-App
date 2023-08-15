import React from 'react';
import './App.scss';
import { HeroSection } from './pages/HomePage/components/HeroSection/HeroSection';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
