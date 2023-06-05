import React from 'react';
import './Navigation.css';

const Navigation = ({ restaurData }) => {
  return (
    <nav className="navigation">
      <div className="first_nav">
        <h4>Total Restaurants:{restaurData.totalRestaurants}</h4>
      </div>

      <div className="second_nav">
        <ul>
          <li>Relevance</li>
          <li>Delivery Time</li>
          <li>Rating</li>
          <li>Cost: Low to High</li>
          <li>Cost: High to Low</li>
          <li>Filters</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
