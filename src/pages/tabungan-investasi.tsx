//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";

//library import
import { Layout, Col, Row, Divider } from 'antd';

//variable declaration
const { Footer } = Layout;

const TI: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider 
                title="Tabungan & Investasi"
                path='' //ganti path asli
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