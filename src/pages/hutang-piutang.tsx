import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";

import { Breadcrumb, Layout, Menu, theme, Col, Row, Divider } from 'antd';

const { Content, Footer } = Layout;

const HP: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <Divider orientation="left">
                Hutang & Piutang
            </Divider>
            <Row justify="space-evenly" align="top">
                <Col span={7}>
                    <ActivityBoard/>
                </Col>
                <Col span={7}>
                    <Card/>
                    <Divider/>
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
  
  export default HP;

  // divider ada garisnya coba cari solusi lain