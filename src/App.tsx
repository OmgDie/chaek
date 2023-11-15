import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className=" min-h-screen bg-gray-100">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
