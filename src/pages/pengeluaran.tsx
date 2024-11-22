import Header from "../feature/header/header"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import TableCustom from "../feature/table/table";

import { Breadcrumb, Layout, Menu, theme, Col, Row, Divider, Space } from 'antd';

const { Content, Footer } = Layout;

const Pengeluaran: React.FC = () => {

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Pengeluaran"
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <TableCustom/>
            </Row>
            <Footer/>
        </Layout>
    );
  };
  
  export default Pengeluaran;

  // divider ada garisnya coba cari solusi lain