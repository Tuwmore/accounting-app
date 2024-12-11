import React from "react";
import ReusableForm from "../../components/form/form";
import { message, Layout } from "antd";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderComponent from "../../feature/header/header";
import FooterComponent from "../../feature/footer/footer";

const FormPendapatan: React.FC = () => {
    const Navigate = useNavigate();

    const handleSubmit = async (values: {AsalPemasukan:string; CaraPembayaran: string; Tanggal:string; TotalPemasukan:string; }) => {
        try {
            const numericAmount = parseFloat(values.TotalPemasukan);

            await addDoc(collection(db, "Pendapatan"), {
                AsalPemasukan:values.AsalPemasukan,
                CaraPembayaran:values.CaraPembayaran,
                Tanggal:values.Tanggal,
                TotalPemasukan:numericAmount,
                createdAt: new Date(),
            });
            message.success("Data berasil ditambakan!");
            Navigate('/Pendapatan');
        }

        catch (error) {
            message.error("Data gagal ditambakan!");
        }
    };

    const fields = [
    {
      name: "AsalPemasukan",
      label: "Asal Pemasukan",
      rules: [{ required: true, message: "Masukan Asal Dana!" }],
    },
    {
        name: "CaraPembayaran",
        label: "Cara Pembayaran",
        rules: [{ required: true, message: "Masukan Cara Pembayaran!" }],
    },
    {
        name: "Tanggal",
        label: "Tanggal",
        type: "date",
        rules: [{ required: true, message: "Masukan Tanggal!" }],
    },
    {
      name: "TotalPemasukan",
      label: "Total Pemasukan",
      type: "number",
      rules: [{ required: true, message: "Masukan Jumalah pemasukan!" }],
    },
  ];

  return (
    <Layout style={{height: "100vh"}}>
        <HeaderComponent/>
        <div style={{ padding: "7rem" }}>
            <ReusableForm 
                fields={fields} 
                onSubmit={handleSubmit}
            />
        </div>
        <FooterComponent/>
    </Layout>
  );
};

export default FormPendapatan;
