import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';

import Header from './src/components/Header';
import SignIn from './src/components/SignIn';
import Error from './src/components/UI/Error';
import Body from './src/components/Body';
import Cart from './src/components/UI/Cart';
import WishList from './src/components/WishList';
import RestaurnatMenu from './src/components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/wishlist',
        element: <WishList />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurant/:restId',
        element: <RestaurnatMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
