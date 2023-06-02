import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Navigation from './src/components/Navigation';
import './App.css';
import Main from './src/components/Main';
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
