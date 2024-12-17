import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Replace with your Firebase setup

/**
 * Hook to calculate the subtraction of sums from two collections.
 * @param collection1 - Name of the first Firestore collection.
 * @param collection2 - Name of the second Firestore collection.
 * @param amountField1 - Field name in the first collection storing numeric amounts.
 * @param amountField2 - Field name in the second collection storing numeric amounts.
 * @param typeFilter1 - Optional: Type filter for the first collection (e.g., 'IN', 'OUT').
 * @param typeFilter2 - Optional: Type filter for the second collection (e.g., 'IN', 'OUT').
 * @returns Object containing the subtraction result, loading state, and any error.
 */
const useSubtractedTotal = (
  collection1: string,
  collection2: string,
  amountField1: string,
  amountField2: string,
  type: string,
  typeFilter1?: string,
  typeFilter2?: string
) => {
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotals = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch total from collection1
        const snapshot1 = await getDocs(collection(db, collection1));
        const total1 = snapshot1.docs
          .map((doc) => doc.data())
          .filter((docData) => (typeFilter1 ? docData.type === typeFilter1 : true)) // Apply filter if provided
          .reduce((acc, docData) => acc + (docData[amountField1] || 0), 0);

        // Fetch total from collection2
        const snapshot2 = await getDocs(collection(db, collection2));
        const total2 = snapshot2.docs
          .map((doc) => doc.data())
          .filter((docData) => (typeFilter2 ? docData.type === typeFilter2 : true)) // Apply filter if provided
          .reduce((acc, docData) => acc + (docData[amountField2] || 0), 0);

        
        // logika perhitungan
        if(type === "dana"){
            setResult(total1 - total2);
        }
        else if(type === "inves"){
            setResult(total1 + total2);
        }
        else{
            setResult(total1);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchTotals();
  }, [collection1, collection2, amountField1, amountField2, typeFilter1, typeFilter2]);

  return { result, loading, error };
};

export default useSubtractedTotal;
