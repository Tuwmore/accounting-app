//library import
import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useMenuNavigation, { MenuItem } from "../../hooks/route";
import { useNavigate } from 'react-router-dom';

//local import
import icon from "../../assets/Icon Logo 2.png";
import './header.css';
import wipeLoginInfo from "../../hooks/log-out"; // Adjust the path to where you save this function

//variable declaration
const { Header } = Layout;

const labels = ["Pendapatan", "Pengeluaran", "Dana", "Tabungan", "Hutang"]; // array untuk list page

const items: MenuItem[] = labels.map((label, index) => ({   // loop index/path assignment untuk array label
  key: (index + 1).toString(),
  label: label,
  path: `/${label.toLowerCase()}`,
}));


const HeaderComponent: React.FC = () => {
  // logic untuk navigasi
  const { handleMenuClick } = useMenuNavigation(items);

  // logic img =! button
  const navigate = useNavigate();

  const handleLogoClick = () => { // logo logic navigation
    navigate("/beranda");
  };

  const handleMaster = () => {
    navigate("/form-master")
  }

  //logic log-out
  const handleLogout = async () => {
    await wipeLoginInfo();
    console.log("All login info wiped.");
    window.location.href = "/log-in"; // Redirect to login page
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
        <button onClick={handleLogout}>Logout</button>
        <Avatar 
          size={64} 
          icon={<UserOutlined />}
          onClick={handleMaster}
          style={{ cursor: "pointer" }}   
        /> 
      </Header>
  );
};

export default HeaderComponent;