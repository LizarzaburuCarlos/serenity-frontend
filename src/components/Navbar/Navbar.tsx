import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import logo from "/img/LogoAzul.png";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import { useSerenityContext } from "../../shared/contexts/SerenityProvider";

//PACIENTE
//ESPECIALISTA

export default function Navbar() {
  const {
    user: { getUser },
    clearAll,
  } = useSerenityContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const rol = !!getUser()?.rol;
  let userType = "PACIENTE";

  if (rol) {
    userType = "ESPECIALISTA";
  }

  const cerrarSesion = () => {
    clearAll();
  };

  function toggleMenu() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <nav className="flex flex-row w-full justify-between items-center">
      <img src={logo} alt="" className="logo-nav hidden md:block" />

      {isDropdownOpen && (
        <div className="dropdown-content absolute top-full left-0 w-full ">
          <ul className="dropdown-menu leading-10 list-none">
            {MenuItems.map((item, index) => {
              if (userType === item.userType || !item.userType) {
                return (
                  <li key={index}>
                    <NavLink className={item.cName} to={item.url}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
      <ul className="nav-menu hidden md:flex grid gap-3 text-center items-center justify-end mr-3">
        {MenuItems.map((item, index) => {
          if (userType === item.userType || !item.userType) {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
      <div className="button-group flex mr-4 md:mr-0">
        <Button onClick={cerrarSesion} buttonStyle="btn-outline">
          Cerrar Sesión
        </Button>
        <div className="espacio-entre-componentes mr-2 md:mr-6"></div>
        <NavLink to="/info-ayuda">
          <Button buttonStyle="btn-primary">Información de Ayuda</Button>
        </NavLink>
      </div>
      <button className="md:hidden relative text-3xl" onClick={toggleMenu}>
        <BarsOutlined />
      </button>
    </nav>
  );
}

// interface MenuItem {
//   title: string,
//   url: string,
//   cName: string
// }

// function CustomLink (props: MenuItem) {

//   const resolvedPath = useResolvedPath(props.url)

//   return (
//     <li key={index}>
//           <NavLink className={item.cName} to={item.url}>
//           {item.title}
//           </NavLink>
//         </li>
//       )

// }
