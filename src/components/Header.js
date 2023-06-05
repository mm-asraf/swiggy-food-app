import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
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
        <div>
          <FontAwesomeIcon className="icon_shape" icon={faMagnifyingGlass} />
        </div>

        <div>
          <FontAwesomeIcon className="icon_shape" icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon className="icon_shape" icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
};

export default Header;
