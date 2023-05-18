import { createContext } from "react";

const AuthContext = createContext();

const AuthProviders = ({ children }) => {
    
  const authInfo = {
    name: "Nuruddin",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
