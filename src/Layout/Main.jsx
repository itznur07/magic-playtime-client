import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopNav from "../components/TopNav/TopNav";

const Main = () => (
  <>
    <TopNav></TopNav>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
);

export default Main;
