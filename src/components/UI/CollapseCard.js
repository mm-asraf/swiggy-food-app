import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;
const { Option } = Select;
import './Panel.css';
import Card from './Card';
import RectangleCard from './RectangleCard';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CollapseCard = ({ resInfo }) => {
  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
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

  console.log(resInfo + '-------------');

  return (
    <>
      <Collapse
        defaultActiveKey={['1', '2']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        className="panel"
      >
        <Panel header="This is panel header 1" key="1" extra={genExtra()}>
          <RectangleCard></RectangleCard>;
        </Panel>
        <Panel header="This is panel header 2" key="2" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" key="3" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
      </Collapse>
    </>
  );
};

export default CollapseCard;
