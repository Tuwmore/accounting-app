//local import
import Header from "../feature/header/header"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import TableCustom from "../feature/table/table";

//library import
import { Layout, Row} from 'antd';

//variable declaration
const { Footer } = Layout;

const Pendapatan: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Pendapatan"
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <TableCustom/>
            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default Pendapatan;