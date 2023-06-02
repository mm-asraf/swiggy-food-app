import React, { useEffect } from 'react';
import MainUI from '../UI/MainUI';
import { API_URL } from '../Utils/api';
import Card from '../UI/Card';
const Main = () => {
  const getRestaurantData = async () => {
    const res = await fetch(API_URL);
    const resData = await res.json();

    console.log(resData.data.cards[0].data.data.cards);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <MainUI>
      <Card>card</Card>
    </MainUI>
  );
};

export default Main;
