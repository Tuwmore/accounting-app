import React from 'react';
import { Button, Flex } from 'antd';

import "./button.css"
import { useNavigate } from 'react-router-dom'; //nanti jadiin hook bareng sama logo

interface button{
  title: string,
  path: string;
}

const ButtonComponent: React.FC <button> = ({title, path}) => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("/" + path);
  };

  return(
    <Flex gap="small" wrap>
      <Button 
        className='button'
        onClick={handleSubmitClick}
      >{title}</Button>
    </Flex>
  );
}



export default ButtonComponent;