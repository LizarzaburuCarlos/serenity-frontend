import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

type MenuUserProps = {
  children: JSX.Element;
};

const MenuUser = ({ children }: MenuUserProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MenuUser;
