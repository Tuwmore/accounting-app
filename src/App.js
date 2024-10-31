import React from 'react';

import logo from './logo.svg';
import HeaderComponent from "./feature/header/header";
import UserProfil from './feature/user-profil/user-profil';
import CardBox from './feature/card/card';
import ActivityBoard from './feature/activity/activity-board/activity-board';
import TableCustom from './feature/table/table';
import './App.css';
import { Layout } from 'antd';

function App() {
  return (
    <Layout>
      <HeaderComponent/>
      <UserProfil/>
      <CardBox/>
      <ActivityBoard/>
      <TableCustom/>
    </Layout>

  );
}

export default App;
