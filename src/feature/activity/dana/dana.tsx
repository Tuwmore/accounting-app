import React from 'react';
import { List, Typography, Card } from 'antd';
import './activity-board.css';

const { Title } = Typography;

const activities = [
  { type: "IN", description: "Keterangan", amount: "Rp." },
  { type: "OUT", description: "Keterangan", amount: "Rp." },
  { type: "IN", description: "Keterangan", amount: "Rp." },
  { type: "OUT", description: "Keterangan", amount: "Rp." },
  { type: "OUT", description: "Keterangan", amount: "Rp." },
  { type: "IN", description: "Keterangan", amount: "Rp." },
  { type: "OUT", description: "Keterangan", amount: "Rp." },
];

const ActivityBoard: React.FC = () => {
  return (
    <Card className="activity-card">
      <Title className="activity-card__title">Activity</Title>
      <List
        dataSource={activities}
        renderItem={(item) => (
          <List.Item className="activity-item">
            <div className='activity-group'>
              <div
                className="activity-tag"
                color={item.type === 'IN' ? 'green' : 'red'}
              >
                {item.type}
              </div>
              <div className="activity-content">
                <div className="activity-amount">{item.amount}</div>
                <div className="activity-note">{item.description}</div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ActivityBoard;
