import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useMenuNavigation, { MenuItem } from "../../hooks/route";
import { useNavigate } from 'react-router-dom';

import icon from "../../assets/Icon Logo 2.png";
import './header.css';

const { Header } = Layout;

const labels = ["Pendapatan", "Pengeluaran", "Dana", "Tabungan", "Hutang"];

const items: MenuItem[] = labels.map((label, index) => ({
  key: (index + 1).toString(),
  label: label,
  path: `/${label.toLowerCase()}`,
}));


const HeaderComponent: React.FC = () => {
  const { handleMenuClick } = useMenuNavigation(items);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/Beranda");
  };

  return (
      <Header className="header-container">
        <img 
          src={icon} 
          alt="icon" 
          className="logo" 
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}  
        />
        <Menu        
          className="menu"
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={handleMenuClick}
        />
        <Avatar size={64} icon={<UserOutlined />} /> 
      </Header>
  );
};

export default HeaderComponent;