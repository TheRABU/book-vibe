import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Root;
