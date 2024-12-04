//belum ada grafik, kayanya firebase bisa bikin grafik jadi 1 API aja

//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";

//library import
import { Layout, Col, Row } from 'antd';

//variable declaration
const { Footer } = Layout;

const Beranda: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <Row justify="space-evenly">
                <Col span={7}>
                    <Card
                        title="Pemasukan"
                        type="IN"
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Pengeluaran"
                        type="OUT"
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Dana"
                        type="$"
                    />
                </Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={15}/>
                <Col span={7}>
                    <ActivityBoard
                        title="Aktifitas"
                    />
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default Beranda;