import React from "react";
import ReusableForm from "../../components/form/form";
import { message, Layout } from "antd";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderComponent from "../../feature/header/header";
import FooterComponent from "../../feature/footer/footer";

const FormMaster: React.FC = () => {
    const Navigate = useNavigate();

    const handleSubmit = async (values: {Kode:string; Nama: string; }) => {
        try {
            await addDoc(collection(db, "Master"), {
                ...values,
                createdAt: new Date(),
            });
            message.success("Data berasil ditambakan!");
            Navigate('/Beranda');
        }

        catch (error) {
            message.error("Data gagal ditambakan!");
        }
    };

    const fields = [
    {
      name: "Kode",
      label: "Kode",
      type: "text",
      rules: [{ required: true, message: "masukan Kode!" }],
    },
    {
        name: "Nama",
        label: "Nama",
        type: "text",
        rules: [{ required: true, message: "Masukan Nama!" }],
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

export default FormMaster;
