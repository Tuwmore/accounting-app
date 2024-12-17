//local import
import Header from "../feature/header/header"
import UserProfil from "../feature/user-profil/user-profil";
import TitleDivider from "../feature/title-divider/title-divider";
import TableCustom from "../feature/table/table";
import AmbilData from "../hooks/ambil-data";
import { db } from "../firebase";
import FooterComponent from "../feature/footer/footer";

//library import
import { Layout, Row} from 'antd';
import { deleteDoc, doc } from "firebase/firestore";

//variable declaration
const { Footer } = Layout;

interface Pendapatan {
    id: string;
    AsalPemasukan: string;
    TotalPemasukan: number;
    Tanggal: string;
    CaraPembayaran: string;
  }

const Pendapatan: React.FC = () => {
    const { data, loading, error } = AmbilData<Pendapatan>("Pendapatan");

    //function untuk edit data
    const handleEdit = (record: Pendapatan) => {
        console.log("Edit:", record);
        // Add navigation to edit form or inline editing logic
    };

    //function untuk menghapus data
    const handleDelete = async (record: Pendapatan) => {
        try {
        await deleteDoc(doc(db, "Pendapatan", record.id));
        console.log("Deleted:", record.id);
        // Optionally, trigger a refetch or state update
        } catch (err) {
        console.error("Failed to delete:", err);
        }
    };

    const columns = [
        { title: "Asal Pemasukan", dataIndex: "AsalPemasukan", key: "AsalPemasukan" },
        {
        title: "Total Pemasukan",
        dataIndex: "TotalPemasukan",
        key: "TotalPemasukan",
        render: (TotalPemasukan: number) => `Rp. ${TotalPemasukan.toLocaleString()}`
        },
        { title: "Tanggal", dataIndex: "Tanggal", key: "Tanggal" },
        { title: "Cara Pembayaran", dataIndex: "CaraPembayaran", key: "CaraPembayaran" },
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Pendapatan"
                path="form-pendapatan"
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <TableCustom<Pendapatan>
                    dataSource={data}
                    columns={columns}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                                
                />
            </Row>
            <FooterComponent/>
        </Layout>
    );
  };
  
  export default Pendapatan;