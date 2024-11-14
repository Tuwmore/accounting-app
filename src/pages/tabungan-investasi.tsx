import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";

import { Layout, Col, Row, Divider } from 'antd';

const { Content, Footer } = Layout;

const TI: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <Divider />
            <Row justify="space-evenly" align="middle">
                <Col span={7}>
                    <ActivityBoard/>
                </Col>
                <Col span={7}>
                    <Card/>
                    <Divider />
                    <Card/> 
                    <Divider />
                    <Card/>        
                </Col>
                <Col span={7}>
                    <ActivityBoard/>
                </Col>

            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default TI;

  // divider ada garisnya coba cari solusi lain