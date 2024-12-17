//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import FooterComponent from "../feature/footer/footer";

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
                path='form-investasi-tabungan' //ganti path asli
            />
            <Row justify="space-evenly" align="top">
                <Col span={7}>
                    <ActivityBoard
                        title="Tabungan"
                        collections={["Tabungan"]}
                    />
                </Col>
                <Col span={7}>
                    <Card
                        title="Tabungan"
                        collection1="Tabungan"
                        collection2="Pengeluaran"
                        amountField1="Nilai" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="Tabungan"
                        lambang="Tb"
                    />
                    <Divider />
                    <Card
                        title="Investasi"
                        collection1="Investasi"
                        collection2="Pengeluaran"
                        amountField1="Nilai" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="Investasi"
                        lambang="Inv"
                    /> 
                    <Divider />
                    <Card
                        title="Total"
                        collection1="Investasi"
                        collection2="Tabungan"
                        amountField1="Nilai" // Replace with the field name in your income collection
                        amountField2="Nilai" // Replace with the field name in your expenses collection
                        type="inves"
                        lambang="T"
                    />        
                </Col>
                <Col span={7}>
                    <ActivityBoard
                        title="Investasi"
                        collections={["Investasi"]}
                    />
                </Col>

            </Row>
            <FooterComponent/>
        </Layout>
    );
  };
  
  export default TI;