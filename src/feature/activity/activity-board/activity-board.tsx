import React from 'react';
import { List, Typography, Tag, Card } from 'antd';
import './activity-board.css';

const { Title } = Typography;

const activities = [
  { type: 'IN' },
  { type: 'OUT' },
  { type: 'OUT' },
  { type: 'IN' },
  { type: 'OUT' },
  { type: 'IN' },
  { type: 'OUT' },
];

const ActivityBoard: React.FC = () => {
  return (
    <Card className="activity-card">
      <Title level={4} className="activity-card__title">Activity</Title>
      <List
        dataSource={activities}
        renderItem={(item) => (
          <List.Item className="activity-item">
            <Tag
              className="activity-tag"
              color={item.type === 'IN' ? 'green' : 'red'}
            >
              {item.type}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ActivityBoard;
