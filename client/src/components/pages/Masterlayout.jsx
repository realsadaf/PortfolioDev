/* eslint-disable react/prop-types */
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function Masterlayout({ children }) {
  return (
    <>
      <CustomNavbar />
      {children}
      <Footer/>
    </>
  );
}

export default Masterlayout;
