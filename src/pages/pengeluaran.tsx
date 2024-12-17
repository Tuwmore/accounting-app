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

interface Pengeluaran {
    id: string;
    AsalDana: string;
    JumlahPengeluaran: number;
    Tanggal: string;
    Tipe: string;
  }

const Pendapatan: React.FC = () => {
    const { data, loading, error } = AmbilData<Pengeluaran>("Pengeluaran");

    //function untuk edit data
    const handleEdit = (record: Pengeluaran) => {
        console.log("Edit:", record);
        // Add navigation to edit form or inline editing logic
    };

    //function untuk menghapus data
    const handleDelete = async (record: Pengeluaran) => {
        try {
        await deleteDoc(doc(db, "Pengeluaran", record.id));
        console.log("Deleted:", record.id);
        // Optionally, trigger a refetch or state update
        } catch (err) {
        console.error("Failed to delete:", err);
        }
    };

    const columns = [
        { title: "Tipe", dataIndex: "Tipe", key: "Tipe" },
        { title: "Tanggal", dataIndex: "Tanggal", key: "Tanggal" },
        { title: "Asal Dana", dataIndex: "AsalDana", key: "AsalDana" },
        {
        title: "Jumlah Pengeluaran",
        dataIndex: "JumlahPengeluaran",
        key: "JumlahPengeluaran",
        render: (JumlahPengeluaran: number) => `Rp. ${JumlahPengeluaran.toLocaleString()}`
        },
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Header/>
            <UserProfil/>
            <TitleDivider
                title="Pengeluaran"
                path="form-pengeluaran" //ganti path asli
            />
            <Row justify="space-evenly" align="top" style={{gap: '20px' }}>
                <TableCustom<Pengeluaran>
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