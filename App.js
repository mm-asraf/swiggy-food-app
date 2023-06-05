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
import { useEffect, useState } from 'react';
import { API_URL } from './src/Utils/api';

const AppLayout = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurData, setRestaurData] = useState([]);

  //making api calls
  const getRestaurantData = async () => {
    const res = await fetch(API_URL);
    const resData = await res.json();

    setRestaurantData(resData.data.cards[0].data.data.cards);
    setRestaurData(resData.data.cards[0].data.data);
  };

  console.log(restaurData.totalRestaurants);
  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="app">
      <Header restaurData={restaurData} />
      <Navigation restaurData={restaurData} />
      <Main restaurantData={restaurantData} />
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
