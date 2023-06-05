import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import { API_URL } from '../Utils/api';

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurData, setRestaurData] = useState([]);

  //making api calls
  const getRestaurantData = async () => {
    const res = await fetch(API_URL);
    const resData = await res.json();

    console.log(resData);
    setRestaurantData(resData?.data?.cards[0]?.data?.data?.cards);
    setRestaurData(resData?.data?.cards[0]?.data?.data);
  };

  console.log(restaurData.totalRestaurants);
  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div>
      <Navigation restaurData={restaurData} />
      <Main restaurantData={restaurantData} />
    </div>
  );
};

export default Body;
