import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './landing-page';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </>
  );
};

export default App;

