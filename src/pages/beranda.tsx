//belum ada grafik, kayanya firebase bisa bikin grafik jadi 1 API aja

//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import FooterComponent from "../feature/footer/footer";

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
                        title="Pedapatan"
                        collection1="Pendapatan"
                        collection2="Pengeluaran"
                        amountField1="TotalPemasukan" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="In"
                        lambang="In"
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Pengeluaran"
                        collection2="Pendapatan"
                        collection1="Pengeluaran"
                        amountField2="TotalPemasukan" // Replace with the field name in your income collection
                        amountField1="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="Out"
                        lambang="Out"
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Dana"
                        collection1="Pendapatan"
                        collection2="Pengeluaran"
                        amountField1="TotalPemasukan" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="dana"
                        lambang="$"
                    />
                </Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={15}/>
                <Col span={7}>
                    <ActivityBoard
                        title="Aktifitas"
                        collections={["Tabungan", "Investasi", "Pendapatan", "Pengeluaran"]}
                    />
                </Col>
            </Row>
            <FooterComponent/>
        </Layout>
    );
  };
  
  export default Beranda;