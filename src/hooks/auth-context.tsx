import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, signInWithEmailAndPassword, User, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase'; // Import your Firebase configuration

// Define AuthContext type
type AuthContextType = {
  user: User | null;
  logIn: (email: string, password: string) => Promise<User>;
  logOut: () => Promise<void>;
};

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up the subscription
  }, [auth]);

  const logIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    return userCredential.user;
  };

  const logOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
