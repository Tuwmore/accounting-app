import React from 'react';

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

import './App.css';

import { Layout } from 'antd';

function App() {
  return (
    <Layout>
      <HP/>
    </Layout>

  );
}

export default App;
