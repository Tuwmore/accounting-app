import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Asal Pemasukan',
    width: 200,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  
  { title: 'Tanggal', dataIndex: 'address', key: '1' },
  { title: 'Sumber', dataIndex: 'address', key: '2' },
  { title: 'Cara Pembayaran', dataIndex: 'address', key: '3' },

  {
    title: 'Edit',
    key: 'operation',
    fixed: 'right',
    width: 75,
    render: () => <a>Edit</a>,
  },
  
  {
    title: 'Delete',
    key: 'operation',
    fixed: 'right',
    width: 75,
    render: () => <a>Delete</a>,
  },

];

const dataSource: DataType[] = [
  { key: '1', name: 'Olivia', age: 32, address: 'New York Park' },
  { key: '2', name: 'Ethan', age: 40, address: 'London Park' },
];

const TableCustom: React.FC = () => {
  return (
    <Table<DataType>
      pagination={false}
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 'max-content' }}
      style={{width: "95%"}}
    />
  );
};

export default TableCustom;