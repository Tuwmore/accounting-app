//library import
import React from "react";
import { message, Layout } from "antd";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection  } from "firebase/firestore";

//local import
import ReusableForm from "../../components/form/form";
import { db } from "../../firebase";
import HeaderComponent from "../../feature/header/header";
import FooterComponent from "../../feature/footer/footer";

const FormHutangPiutang: React.FC = () => {
    const Navigate = useNavigate();

    //melakukan save data ke database
    const handleSubmit = async (values: {Tipe:string; AsalTujuanDana: string; Tanggal:string; Nilai:string; KepadaPemberi:string; InOut:string; }) => {
        try {
            //mengubah data pemasukan menjadi float
            const numericAmount = parseFloat(values.Nilai);

            //penyimpanan data menuju database
            await addDoc(collection(db, values.Tipe), {
                AsalDana:values.AsalTujuanDana,
                Tanggal:values.Tanggal,
                Nilai:numericAmount,
                Keterangan:values.KepadaPemberi,
                InOut:values.InOut,
                createdAt: new Date(),
            });
            message.success("Data berasil ditambakan!");
            Navigate('/hutang');
        }
        catch (error) {
            message.error("Data gagal ditambakan!");
        }
    };

    //data yang harus dimasukan
    const fields = [
        {
            name:"Tipe",
            label:"Tipe",
            type: "select",
            rules: [{ required: true, message: "Masukan Tipe!" }],
            options: [
                {label: "Hutang", value: "Hutang"},
                {label: "Piutang", value: "Piutang"},
            ],
        },
        {
            name: "AsalTujuanDana",
            label: "Asal / Tujuan Dana",
            type: "select",
            rules: [{ required: true, message: "Masukan asal dana!" }],
            options: [
                {label: "Cash", value: "Cash"},
                {label: "E-wallet", value: "E-wallet"},
                {label: "Bank", value: "Bank"},
            ],
        },
        {
            name: "Tanggal",
            label: "Tanggal",
            type: "date",
            rules: [{ required: true, message: "Masukan Tanggal!" }],
        },
        {
            name: "Nilai",
            label: "Nilai",
            type: "number",
            rules: [{ required: true, message: "Masukan Nilai!" }],
        },
        {
            name: "KepadaPemberi",
            label: "Kepada/Pemberi",
            type: "text",
            rules: [{ required: true, message: "Masukan Keterangan!" }],
        },
        {
            name: "InOut",
            label: "In/Out",
            type: "radio",
            rules: [{ required: true, message: "Pilih salah satu!" }],
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

export default FormHutangPiutang;
