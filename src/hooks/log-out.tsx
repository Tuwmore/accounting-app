import { getAuth, signOut } from "firebase/auth";

const wipeLoginInfo = async () => {
  try {
    // Sign out from Firebase
    const auth = getAuth();
    await signOut(auth);
    console.log("User signed out successfully.");

    // Clear localStorage/sessionStorage
    localStorage.clear(); // If you've stored any data in localStorage
    sessionStorage.clear(); // If you've used sessionStorage
    console.log("Local and session storage cleared.");

    // Optionally, clear cookies (if used)
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0];
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
    console.log("Cookies cleared.");
  } catch (error) {
    console.error("Error wiping login info:", error);
  }
};

export default wipeLoginInfo;
