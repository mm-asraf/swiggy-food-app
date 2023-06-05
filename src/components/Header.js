import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faHouse } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faHouse,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../Utils/api';
const Header = ({ restaurData }) => {
  console.log(restaurData);
  return (
    <header className="header_container">
      <div className="first_half">
        <div className="logo">
          <img src={IMG_URL} alt="swiggy_clone" />
        </div>

        <div className="side_collapse">
          <span>Kolkata,West Bengal,India</span>
          <FontAwesomeIcon className="icon_shape" icon={faChevronDown} />
        </div>
      </div>

      <div className="second_half">
        <FontAwesomeIcon className="icon_shape" icon={faMagnifyingGlass} />
        <Link to="/" className="link_tag">
          <FontAwesomeIcon className="icon_shape" icon={faHouse} />
        </Link>

        <Link to="/signin" className="link_tag">
          <FontAwesomeIcon className="icon_shape" icon={faUser} />
        </Link>

        <Link to="/wishlist" className="link_tag">
          <FontAwesomeIcon className="icon_shape" icon={faHeart} />
        </Link>

        <Link to="/cart" className="link_tag">
          <FontAwesomeIcon className="icon_shape" icon={faCartShopping} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
