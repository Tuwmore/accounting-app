import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import icon from "../../assets/Icon Logo 2.png";
import './header.css';

const { Header } = Layout;

const labels = ["Pendapatan", "Pengeluaran", "Dana", "Tabungan", "Hutang"];

const items = labels.map((label, index) => ({
  key: index + 1,
  label: label,
}));

const HeaderComponent: React.FC = () => {

  return (
      <Header className="header-container">
        <img src={icon} alt="icon" className="logo" />
        <Menu        
          className="menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
        />
        <Avatar size={64} icon={<UserOutlined />} />
      </Header>
  );
};

export default HeaderComponent;