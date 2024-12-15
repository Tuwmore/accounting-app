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
//pages import
import Beranda from './pages/beranda';
import Dana from './pages/dana';
import TI from './pages/tabungan-investasi';
import HP from './pages/hutang-piutang';
import LogIn from "./pages/log-in"
import Pendapatan from './pages/pendapatan';
import Pengeluaran from './pages/pengeluaran';
//form import
import FormPendapatan from "./pages/form/form-pendapatan"
import FormMaster from './pages/form/form-master';
import FormPengeluaran from './pages/form/form-pengeluaran';
import FormInvestasiTabungan from './pages/form/form-investasi-tabungan';
import FormHutangPiutang from './pages/form/form-hutang-piutang';

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

            <Route path='/form-pendapatan' element={<FormPendapatan />} />
            <Route path='/form-master' element={<FormMaster/>}/>
            <Route path='/form-pengeluaran' element={<FormPengeluaran/>}/>
            <Route path='/form-investasi-tabungan' element={<FormInvestasiTabungan/>}/>
            <Route path='/form-hutang-piutang' element={<FormHutangPiutang/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};


export default App;
