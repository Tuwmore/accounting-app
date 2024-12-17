//local import
import Header from "../feature/header/header"
import ActivityBoard from "../feature/activity/activity-board/activity-board"
import Card from "../feature/card/card"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import FooterComponent from "../feature/footer/footer";

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
                path='form-hutang-piutang'
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <ActivityBoard
                        title="Hutang"
                        collections={["Hutang"]}
                    />
                </Col>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Card
                        title="Hutang"
                        collection1="Hutang"
                        collection2="Pengeluaran"
                        amountField1="Nilai" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="Hutang"
                        lambang="Ht"
                        />
                        <Card
                        title="Piutang"
                        collection1="Piutang"
                        collection2="Pengeluaran"
                        amountField1="Nilai" // Replace with the field name in your income collection
                        amountField2="JumlahPengeluaran" // Replace with the field name in your expenses collection
                        type="Piutang"
                        lambang="Pt"
                        /> 
                    </Space>
                </Col>
                <Col sm={23} xs={23} md={23} lg={7}>
                    <ActivityBoard
                        title="Piutang"
                        collections={["Piutang"]}
                    />
                </Col>

            </Row>
            <FooterComponent/>
        </Layout>
    );
  };
  
  export default HP;