import React, { useEffect, useState } from 'react';
import { RESTAURANT_MENU_API } from '../Utils/api';
import ShimmerUI from './UI/ShimmerUI';
import { useParams } from 'react-router-dom';
import CollapseCard from './UI/CollapseCard';

const RestaurnatMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { restId } = useParams();

  const getMenuInfo = async () => {
    const data = await fetch(RESTAURANT_MENU_API + restId);
    const json = await data.json();

    setResInfo(json.data);
  };
  useEffect(() => {
    getMenuInfo();
  }, []);

  if (resInfo.length === 0) {
    return <ShimmerUI />;
  }
  console.log(resInfo);
  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);
  console.log(resInfo.cards[0].card.card.info);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(',')}- {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul> */}
      <CollapseCard />
    </div>
  );
};

export default RestaurnatMenu;
