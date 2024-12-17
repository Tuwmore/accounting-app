import React from 'react';
import { Layout } from 'antd';
import "./footer.css";

const { Footer} = Layout;

const FooterComponent: React.FC = () => {

  return (
      <Footer style={{ textAlign: 'center' }} className='background'>
      </Footer>
  );
};

export default FooterComponent;