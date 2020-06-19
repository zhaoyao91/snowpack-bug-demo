import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Demo from 'src/pages/Demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="demo" element={<Demo />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
