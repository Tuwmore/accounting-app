//library import
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, FirestoreError, WhereFilterOp  } from "firebase/firestore";

//local import
import { db } from "../firebase";

//deklarasi untuk filter data
interface UseFirebaseCollectionOptions {
  filters?: { field: string; operator: WhereFilterOp; value: any }[];
}


const AmbilData = <T extends {}>(collectionName: string, options?: UseFirebaseCollectionOptions) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(db, collectionName);
        let q = query(collectionRef);

        // Apply filters if provided
        if (options?.filters) {
          options.filters.forEach((filter) => {
            q = query(q, where(filter.field, filter.operator, filter.value));
          });
        }

        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({id: doc.id,...doc.data(),})) as (T & { id: string })[];        
        setData(items);
        setError(null);
      } catch (err) {
        setError((err as FirestoreError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, options?.filters]);

  return { data, loading, error };
};

export default AmbilData;
