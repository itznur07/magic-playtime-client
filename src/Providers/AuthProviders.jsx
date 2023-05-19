import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();

  /** User Sing in with email password */
  const singIn = (name, email, password, photoURL) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    name: "Nuruddin",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
