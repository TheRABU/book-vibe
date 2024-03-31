import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";

const Root = () => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
};

export default Root;
