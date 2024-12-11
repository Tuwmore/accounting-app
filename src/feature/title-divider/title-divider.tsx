import React from 'react';
import { Card, Col, Row, Typography, Space } from 'antd';

import Button from '../../components/button/button';
import "./title-divider.css"
const { Text } = Typography;

interface TitleDivider {
  title: string;
  path: string;
}

const TitleDivider: React.FC <TitleDivider> = ({title, path}) => {

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <Card className='title-card'>
          <Row align="middle" justify="space-between" style={{gap: '20px' }}>
            <Col>
              <Space align="center" size="middle">
                  <Text className='title-text'>{title}</Text>
              </Space>
            </Col>
            <Col>
              <Space align="center" size="large">
                <Button
                  title='Tambah +'
                  path={path} 
                />
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>    
    );
  };
  
  export default TitleDivider;