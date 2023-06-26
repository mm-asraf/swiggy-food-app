import React from 'react';

import ShimmerUI from './UI/ShimmerUI';
import { useParams } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import { Collapse, Select, Space } from 'antd';
const { Panel } = Collapse;
import './UI/Panel.css';
import RectangleCard from './UI/RectangleCard';
import './Restaurant.css';
import { v4 as uuidv4 } from 'uuid';
import useRestaurnatMenu from '../Utils/useRestaurantMenu';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const RestaurnatMenu = () => {
  const { restId } = useParams();

  //using custom hook
  const resInfo = useRestaurnatMenu(restId);

  if (resInfo.length === 0) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    locality,
    totalRatingsString,
  } = resInfo.cards[0].card.card.info;
  const { itemCards, title } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const menu = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  console.log(menu);
  console.log('---');
  // console.log('itemCards', itemCards);
  // console.log(resInfo.cards[0].card.card.info);
  const { itemCards2 } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(title);

  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  console.log(resInfo);

  return (
    <div>
      <RectangleCard className="card_setOne">
        <div className="first_rec_side">
          <h4>{name}</h4>
          <p>{cuisines.join(',')}</p>
          <p>
            {locality} <span>{sla.lastMileTravelString}</span>
          </p>
          <p>
            {sla.slaString}- {costForTwoMessage}
          </p>
        </div>

        <div className="second_side">
          <span>{avgRating}</span>
          <br />
          <span>{totalRatingsString}</span>
        </div>
      </RectangleCard>

      {menu.map((card) => {
        const { title } = card?.card?.card;
        return (
          <Space direction="vertical" className="panel_space" key={uuidv4()}>
            <Collapse collapsible="header" defaultActiveKey={['1']}>
              <Panel header={title} key="1">
                {itemCards.map((items) => {
                  return (
                    <RectangleCard className="card_set">
                      {console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', items)}
                    </RectangleCard>
                  );
                })}
              </Panel>
            </Collapse>
          </Space>
        );
      })}
    </div>
  );
};

export default RestaurnatMenu;
