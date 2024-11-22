import React from 'react';
import { Button, Flex } from 'antd';

import "./button.css"

interface button{
  title: string;
}

const button: React.FC <button> = ({title}) => (
  <Flex gap="small" wrap>
    <Button className='button'>{title}</Button>
  </Flex>
);

export default button;