import React from 'react';
import { Avatar, Card, Typography, Space } from 'antd';
import "./card.css"

const { Text } = Typography;

interface CardBox {
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