import { useState, useEffect } from 'react';
import { RESTAURANT_MENU_API } from '../Utils/api';

const useRestaurnatMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    getMenuInfo();
  }, []);

  const getMenuInfo = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurnatMenu;
