// library import
import React from "react";
import { Avatar, Card, Typography, Space } from "antd";

// local import
import useSubtractedTotal from "../../hooks/operasi-dana"; // Adjust the path as necessary
import "./card.css";

// variable declaration
const { Text } = Typography;

interface CardBoxProps {
  title: string;
  collection1: string,
  collection2: string,
  amountField1: string,
  amountField2: string,
  type: string,
  lambang: string,
  typeFilter1?: string,
  typeFilter2?: string
}

const CardBox: React.FC<CardBoxProps> = ({
    title,
    collection1,
    collection2,
    amountField1,
    amountField2,
    type,
    lambang,
    typeFilter1,
    typeFilter2
}) => {
  const { result, loading, error } = useSubtractedTotal(
    collection1,
    collection2,
    amountField1,
    amountField2,
    type,
    typeFilter1,
    typeFilter2
  );

  return (
    <Card className="simple-card">
      <Space align="center">
        <Avatar
          size={72}
          shape="square"
          className="simple-card__avatar"
        >
          {lambang}
        </Avatar>
        <div>
          <Text className="simple-card__title">{title}</Text>
          <br />
          {loading ? (
            <Text className="simple-card__subtitle">Loading...</Text>
          ) : error ? (
            <Text className="simple-card__subtitle" type="danger">
              Error: {error}
            </Text>
          ) : (
            <Text className="simple-card__subtitle">
              Rp. {result.toLocaleString()} {/* Format the result as currency */}
            </Text>
          )}
        </div>
      </Space>
    </Card>
  );
};

export default CardBox;
