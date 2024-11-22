import React from 'react';
import { Layout } from 'antd';

const { Footer} = Layout;

const FooterComponent: React.FC = () => {

  return (
      <Footer style={{ textAlign: 'center' }}>
        This is footer
      </Footer>
  );
};

export default FooterComponent;