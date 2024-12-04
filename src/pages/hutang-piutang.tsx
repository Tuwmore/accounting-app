//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";

//library import
import { Layout, Col, Row, Space } from 'antd';

//variable declaration
const { Footer } = Layout;

const HP: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Hutang & Piutang"
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <ActivityBoard
                        title="Hutang"
                    />
                </Col>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Card
                            title="Hutang"
                            type="Ht"       //type untuk tulisan logo
                        />
                        <Card
                            title="Piutang"
                            type="Pt"       //type untuk tulisan logo
                        /> 
                    </Space>
                </Col>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <ActivityBoard
                        title="Piutang"
                    />
                </Col>

            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default HP;

  // divider ada garisnya coba cari solusi lain