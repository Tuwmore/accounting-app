import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";

import { Breadcrumb, Layout, Menu, theme, Col, Row, Divider } from 'antd';

const { Content, Footer } = Layout;

const Dana: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            
            <Row justify="space-evenly">
                <Col span={7}>
                    <ActivityBoard/>
                </Col>
                <Col span={7}>
                    <ActivityBoard/>
                </Col>
                <Col span={7}>
                    <ActivityBoard/>
                </Col>

            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default Dana;