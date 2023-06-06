import React, { useEffect, useState } from 'react';
import MainUI from './UI/MainUI';
import { CLOUDINARY_URL } from '../Utils/api';
import Card from './UI/Card';
import classes from './UI/Card.module.css';
import Star from './UI/Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Main.css';
import styles from './UI/Star.module.css';
import ShimmerUI from './UI/ShimmerUI';
import { Link } from 'react-router-dom';

const Main = ({ restaurantData }) => {
  console.log(restaurantData);

  return restaurantData.length === 0 ? (
    <ShimmerUI />
  ) : (
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
            sla,
          } = res?.data;
          return (
            <Card className={classes.cont}>
              <Link
                to={'/restaurant/' + sla.restaurantId}
                key={sla.restaurantId}
                className={classes.link}
              >
                <div>
                  <img
                    src={CLOUDINARY_URL + cloudinaryImageId}
                    alt="restaurant_img"
                    className="card_image"
                  />
                  <p className="card_name">{name}</p>
                  <p className="p card_cuisines">{cuisines.join(',')}</p>
                  <div className="set_in_one_line">
                    <Star>
                      <div
                        className="st"
                        style={{
                          backgroundColor:
                            avgRating == '--'
                              ? '#535665'
                              : avgRating >= 4
                              ? '#48c479'
                              : '#db7c38',
                        }}
                      >
                        <span className="p card_Rating">
                          <FontAwesomeIcon
                            className="icon_star"
                            icon={faStar}
                          />
                          {avgRating}
                        </span>
                      </div>
                    </Star>

                    <span className="p card_costForTwoString">
                      {costForTwoString}
                    </span>

                    <span className="p card_deliveryTime">{deliveryTime}</span>
                  </div>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </MainUI>
  );
};

export default Main;
