import React from 'react';
import {Menu, MenuProps} from 'antd';
import {useNavigate} from "react-router-dom";

const menuItems: MenuProps['items'] = [
  {key: '/', label: 'Episodes'},
  {key: '/characters', label: 'Characters'},
  {key: '/locations', label: 'Locations'},
]

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const onClickMenu = ({key}: any) => {
    navigate(key);
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectable={false}
      items={menuItems}
      onClick={onClickMenu}
    />
  )
};

export default NavigationBar;