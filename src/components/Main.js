import React, { useEffect, useState } from 'react';
import MainUI from './UI/MainUI';
import { API_URL, CLOUDINARY_URL } from '../Utils/api';
import Card from './UI/Card';
import './Main.css';

const Main = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  //making api calls
  const getRestaurantData = async () => {
    const res = await fetch(API_URL);
    const resData = await res.json();

    setRestaurantData(resData.data.cards[0].data.data.cards);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  console.log('--------------------------------');
  console.log(restaurantData);

  return (
    <MainUI>
      <div className="container">
        {restaurantData.map((res) => {
          const {
            name,
            cloudinaryImageId,
            cuisines,
            costForTwoString,
            avgRating,
            deliveryTime,
          } = res?.data;
          return (
            <Card key={res.id}>
              <img
                src={CLOUDINARY_URL + cloudinaryImageId}
                alt="restaurant_img"
                className="card_image"
              />
              <p className="card_name">{name}</p>
              <p className="p card_cuisines">{cuisines.join(',')}</p>
              <div className="set_in_one_line">
                <span className="p card_costForTwoString">
                  {costForTwoString}
                </span>
                <span className="p card_Rating">{avgRating}</span>
                <span className="p card_deliveryTime">{deliveryTime}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </MainUI>
  );
};

export default Main;
