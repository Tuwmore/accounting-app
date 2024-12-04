// untuk total harus ada logic penjumlahannya

//library import
import React from 'react';
import { Avatar, Card, Typography, Space } from 'antd';

//local import
import "./card.css"

//variable declaration
const { Text } = Typography;  // untuk tulisan

interface CardBox {   // untuk input dinamis
  title: string;
  type: string;
}

const CardBox: React.FC <CardBox> = ({title, type}) => {

  return(

    <Card className="simple-card">
      <Space align="center">
        <Avatar size={72} shape='square' style={{ backgroundColor: '#d9d9d9', color: '#000', fontWeight:"bold" }}>
          {type}
        </Avatar>
        <div>
          <Text className="simple-card__title">{title}</Text>
          <br />
          <Text className="simple-card__subtitle">Rp.</Text>
        </div>
      </Space>
    </Card>
  );
}

  
export default CardBox;