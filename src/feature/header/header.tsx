import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './header.css';

const { Header } = Layout;

const labels = ["Home", "Profile", "Settings", "About", "New"];

const items = labels.map((label, index) => ({
  key: index + 1,
  label: label,
}));

const HeaderComponent: React.FC = () => {

  return (
      <Header className="header-container">
        <div className="demo-logo" />
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