//library import
import React, { useEffect, useState } from "react";
import { message, Layout } from "antd";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs  } from "firebase/firestore";

//local import
import ReusableForm from "../../components/form/form";
import { db } from "../../firebase";
import HeaderComponent from "../../feature/header/header";
import FooterComponent from "../../feature/footer/footer";
import AmbilData from "../../hooks/ambil-data";

const FormPengeluaran: React.FC = () => {
    const Navigate = useNavigate();

    //melakukan save data ke database
    const handleSubmit = async (values: {Tipe:string; AsalDana: string; Tanggal:string; JumlahPengeluaran:string; }) => {
        try {
            //mengubah data pemasukan menjadi float
            const numericAmount = parseFloat(values.JumlahPengeluaran);

            //penyimpanan data menuju database
            await addDoc(collection(db, "Pengeluaran"), {
                Tipe:values.Tipe,
                AsalDana:values.AsalDana,
                Tanggal:values.Tanggal,
                JumlahPengeluaran:numericAmount,
                createdAt: new Date(),
            });
            message.success("Data berasil ditambakan!");
            Navigate('/pengeluaran');
        }
        catch (error) {
            message.error("Data gagal ditambakan!");
        }
    };

    //mengambil data master
    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
    const { data, loading, error } = AmbilData<{ Nama: string; Kode: string }>("Master");

    //melakukan duplikasi untuk menyamakan nama
    useEffect(() => {
    if (data && Array.isArray(data)) {
      const mappedOptions = data.map((category) => ({
        label: category.Nama,
        value: category.Nama,
      }));
      setOptions(mappedOptions);
    }
  }, [data]);

    //data yang harus dimasukan
    const fields = [
    {
      name: "Tipe",
      label: "Tipe",
      type: "select",
      rules: [{ required: true, message: "Masukan tipe!" }],
      options: options,
    },
    {
        name: "AsalDana",
        label: "Asal Dana",
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
      name: "JumlahPengeluaran",
      label: "Jumlah Pengeluaran",
      type: "number",
      rules: [{ required: true, message: "Masukan Jumalah pengeluaran!" }],
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

export default FormPengeluaran;
