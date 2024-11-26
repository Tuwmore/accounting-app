import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import HeaderComponent from "./feature/header/header";
import UserProfil from './feature/user-profil/user-profil';
import CardBox from './feature/card/card';
import ActivityBoard from './feature/activity/activity-board/activity-board';
import TableCustom from './feature/table/table';

import Beranda from './pages/beranda';
import Dana from './pages/dana';
import TI from './pages/tabungan-investasi';
import HP from './pages/hutang-piutang';
import LogIn from "./pages/log-in"
import Pendapatan from './pages/pendapatan';
import Pengeluaran from './pages/pengeluaran';

import './App.css';

import { Layout } from 'antd';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/logIn' element={<LogIn/>} />
        <Route path="/pendapatan" element={<Pendapatan />} />
        <Route path="/pengeluaran" element={<Pengeluaran />} />
        <Route path="/dana" element={<Dana />} />
        <Route path="/tabungan" element={<TI />} />
        <Route path="/hutang" element={<HP />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
};


export default App;
