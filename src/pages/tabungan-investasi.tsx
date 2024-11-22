import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";

import { Layout, Col, Row, Divider } from 'antd';

const { Content, Footer } = Layout;

const TI: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider 
                title="Tabungan & Investasi"
            />
            <Row justify="space-evenly" align="top">
                <Col span={7}>
                    <ActivityBoard
                        title="Tabungan"
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Total"
                        type="T"
                    />
                    <Divider />
                    <Card
                        title="Tabungan"
                        type="Tb"
                    /> 
                    <Divider />
                    <Card
                        title="Investasi"
                        type="Inv"
                    />        
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="Investasi"
                    />
                </Col>

            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default TI;

  // divider ada garisnya coba cari solusi lain