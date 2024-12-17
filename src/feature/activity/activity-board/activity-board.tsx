import React, { useState, useEffect } from 'react';
import { List, Typography, Card } from 'antd';
import { collection, getDocs, WhereFilterOp  } from 'firebase/firestore';
import { db } from '../../../firebase'; // Your Firebase setup
import './activity-board.css';

const { Title } = Typography;

interface Activity {
  type: string;
  description: string; // Unified field for both collections
  amount: number;
}

interface ActivityBoardProps {
  title: string; // Title of the board
  collections: string[]; // Firebase collection name
  filters?: { field: string; operator: WhereFilterOp; value: any }[]; // Optional filters
}

const ActivityBoard: React.FC<ActivityBoardProps> = ({ title, collections }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const allData: Activity[] = [];
    
        for (const collectionName of collections) {
          const collectionRef = collection(db, collectionName);
          const snapshot = await getDocs(collectionRef);
    
          const data = snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
              type: docData.InOut || collectionName || "-", // Fallback for missing field
              description: docData.Keterangan || docData.AsalPemasukan || docData.Tipe || "No description",
              amount: docData.Nilai || docData.TotalPemasukan || docData.JumlahPengeluaran || "N/A", // Handle different amount field names
            };
          });
    
          allData.push(...data);
        }
    
        setActivities(allData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [collections]);

  return (
    <Card className="activity-card">
      <Title className="activity-card__title">{title}</Title>
        <List
          dataSource={activities}
          renderItem={(item) => (
            <List.Item className="activity-item">
              <div className="activity-group">
                <div
                  className="activity-tag"
                  style={{
                    color: (item.type === "In" || item.type === "Pendapatan") ? "green" : "red",
                  }}
                >
                  {(item.type === "In" || item.type === "Out") ? (item.type) : (item.type === "Pendapatan") ? "In" : "Out"}
                </div>
                <div className="activity-content">
                  <div className="activity-amount">Rp. {item.amount}</div>
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
