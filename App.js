import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Navigation from './src/components/Navigation';
import './App.css';
import Main from './src/components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './src/components/SignIn';
import Error from './src/components/UI/Error';
import ShimmerUI from './src/components/UI/ShimmerUI';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/shimmer',
    element: <ShimmerUI />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
