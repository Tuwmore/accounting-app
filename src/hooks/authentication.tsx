import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, User, setPersistence, browserSessionPersistence } from "firebase/auth";
import {app} from "../firebase"; // Adjust path to your firebase config

const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Auth persistence set to session-only");
  })
  .catch((error) => {
    console.error("Failed to set auth persistence:", error);
  });

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const logIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Store user information
      setError(null);
      return userCredential.user;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const logOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return { user, logIn, logOut, error };
};

export default useAuth;
