import React from 'react';
import './index.css';
import { Button, Flex } from 'antd';

const button: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
  </Flex>
);

export default button;