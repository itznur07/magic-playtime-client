import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  verifyPasswordResetCode,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [compares, setCompares] = useState([]);

  const auth = getAuth(app);

  /** User Sing up with email password */
  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /** User login with email and password */
  const logInWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /** Update Profile */
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  /** User logout */
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /** User Sign in with Google */
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  /** User Forget Password System */
  const forgetPassword = () => {
    setLoading(true);
    return verifyPasswordResetCode(auth);
  };

  /** Auth observer firebase */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  /** Products */
  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const reverseData = data.reverse();
        setProducts(reverseData);
      });
  }, []);

  /** carts */
  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/wishlists")
      .then((res) => res.json())
      .then((data) => {
        setWishlists(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/compares")
      .then((res) => res.json())
      .then((data) => {
        setCompares(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const authInfo = {
    user,
    loading,
    products,
    carts,
    wishlists,
    userRegistration,
    signInWithGoogle,
    logInWithEmailPassword,
    logOut,
    forgetPassword,
    updateUserProfile,
    blogs,
    compares,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
