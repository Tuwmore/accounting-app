import React from "react";
import { Table, Button, TableProps } from "antd";

interface ReusableTableProps<T> extends TableProps<T> {
  dataSource: T[];
  columns: any[];
  onEdit?: (record: T) => void; // Edit handler
  onDelete?: (record: T) => void; // Delete handler
}

const TableCustom = <T extends { id: string }>({
  dataSource,
  columns,
  onEdit,
  onDelete,
  ...props
}: ReusableTableProps<T>) => {
  const actionColumn = {
    title: "Ubah",
    key: "Ubah",
    fixed: 'right',
    width:150,
    render: (text: any, record: T) => (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {onEdit && <Button onClick={() => onEdit(record)}>Edit</Button>}
        {onDelete && <Button danger onClick={() => onDelete(record)}>Delete</Button>}
      </div>
    ),
  };

  return (
    <Table
      dataSource={dataSource}
      columns={[...columns, actionColumn]} // Append actions column
      rowKey="id"
      bordered
      pagination={{ pageSize: 10 }}
      scroll={{ x: 'max-content' }}
      style={{width: "95%"}}
      {...props}
    />
  );
};

export default TableCustom;