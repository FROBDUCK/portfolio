import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import BullsAndCows from './pages/BullsAndCows';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<BullsAndCows />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;