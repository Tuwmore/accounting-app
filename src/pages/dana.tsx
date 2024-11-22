import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import UserProfil from "../feature/user-profil/user-profil";

import { Layout,Col, Row } from 'antd';

const { Content, Footer } = Layout;

const Dana: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            
            <Row justify="space-evenly">
                <Col span={7}>
                    <ActivityBoard
                        title="Cash"
                    />
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="Bank"
                    />
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="E-wallet"
                    />
                </Col>

            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default Dana;