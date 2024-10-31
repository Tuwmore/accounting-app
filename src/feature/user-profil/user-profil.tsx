import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
    width: '33%',
    textAlign: 'center',
  };

const UserProfil: React.FC = () => {

    return (
        <Card style={{ width: "100%" }}>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>
            Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
    );
  };
  
  export default UserProfil;