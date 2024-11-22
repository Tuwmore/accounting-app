import React from 'react';
import { Card, Col, Row, Avatar, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./user-profil.css"

const { Text } = Typography;

const UserProfil: React.FC = () => {

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <Card className="profile-card">
          <Row align="middle" justify="space-between">
            <Col>
              <Space align="center" size="middle">
                <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: '#274582' }} />
                <div>
                  <Text className="profile-card__name">Hi, Muhammad Rifki Apriannada Putra</Text>
                  <br />
                  <Text className="profile-card__role">Admin</Text>
                </div>
              </Space>
            </Col>
            <Col>
              <div className="profile-card__date-time">
                <Text className="profile-card__time">11:08:24</Text>
                <br />
                <Text className="profile-card__date">Senin, 21/10/2024</Text>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>    
    );
  };
  
  export default UserProfil;