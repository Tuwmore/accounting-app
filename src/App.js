//library import
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//local import
//feature test
import logo from './logo.svg';
import HeaderComponent from "./feature/header/header";
import UserProfil from './feature/user-profil/user-profil';
import CardBox from './feature/card/card';
import ActivityBoard from './feature/activity/activity-board/activity-board';
import TableCustom from './feature/table/table';

//pages import
import Beranda from './pages/beranda';
import Dana from './pages/dana';
import TI from './pages/tabungan-investasi';
import HP from './pages/hutang-piutang';
import LogIn from "./pages/log-in"
import Pendapatan from './pages/pendapatan';
import Pengeluaran from './pages/pengeluaran';

//hooks import
import ProtectedRoute from './hooks/protected-route';
import {AuthProvider} from "./hooks/auth-context"

//global styling import
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/pendapatan" element={<Pendapatan />} />
            <Route path="/pengeluaran" element={<Pengeluaran />} />
            <Route path="/dana" element={<Dana />} />
            <Route path="/tabungan" element={<TI />} />
            <Route path="/hutang" element={<HP />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/" element={<Beranda />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};


export default App;
