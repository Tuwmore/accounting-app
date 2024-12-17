//Divider dana belum ada, karena khusus, dia perlu total di kanannya bukan tombol

//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import FooterComponent from "../feature/footer/footer";

//library import
import { Layout,Col, Row } from 'antd';

//variable declaration
const { Footer } = Layout;

const Dana: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Dana"
                path=''
            />
            <Row justify="space-evenly">
                <Col span={7}>
                    <ActivityBoard
                        title="Cash"
                        collections={["Pendapatan", "Pengeluaran"]}
                    />
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="Bank"
                        collections={["Pendapatan", "Pengeluaran"]}
                    />
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="E-wallet"
                        collections={["Pendapatan", "Pengeluaran"]}
                    />
                </Col>

            </Row>
            <FooterComponent/>
        </Layout>
    );
  };
  
  export default Dana;