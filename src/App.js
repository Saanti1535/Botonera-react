import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React from 'react';
import { LandingPage } from 'views/LandingPage';
import { Botonera } from 'views/Botonera';

function App() {
  const history = createBrowserHistory();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/botonera/:name" element={<Botonera />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
