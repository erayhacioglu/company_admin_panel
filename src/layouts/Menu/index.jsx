import { Fragment,useState } from "react";
import { Link,useLocation } from "react-router-dom";
import "./menu.scss";
import menuData from "../../constants/menu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const [subMenuNumber, setSubMenuNumber] = useState([]);

  const { pathname } = useLocation();

  const {t} = useTranslation();

  const authState = {
    personal: {
      role: "Admin",
    },
  };

  const handleSubMenu = (key) => {
    const findIndex = subMenuNumber.find((index) => index === key);
    if (!findIndex) {
      setSubMenuNumber([...subMenuNumber, key]);
    }
    if (findIndex) {
      const filteredIndex = subMenuNumber.filter((index) => index !== key);
      setSubMenuNumber(filteredIndex);
    }
  };

  const isActive = (pn) => {
    if (pn === pathname) {
      return "active";
    }
  };
  return (
    // <div className="menu">
    //   {
    //     menuData && menuData?.length > 0 && menuData?.map((item) => {
    //       console.log('item', item)
    //     })
    //   }
    // </div>
    <div className="menu">
      {menuData?.map((menuItem, key) => (
        <Fragment key={key}>
          {menuData &&
            !menuItem?.subMenu &&
            menuItem?.role?.includes(authState?.personal?.role) && (
              <Link
                className={`menu-list ${isActive(menuItem?.path)}`}
                to={menuItem?.path}
                key={key}
              >
                <span className="menu-list-content">
                  {menuItem.icon}&nbsp;&nbsp;{t(menuItem.name)}
                </span>
              </Link>
            )}
          {menuData &&
            menuItem?.subMenu &&
            menuItem?.role?.includes(authState?.personal?.role) && (
              <li
                className={`menu-list ${
                  subMenuNumber?.includes(key) ? "active" : ""
                }`}
                onClick={() => handleSubMenu(key)}
                key={menuItem.name}
              >
                <span className="menu-list-content">
                  {menuItem.icon}&nbsp;&nbsp;{t(menuItem.name)}
                </span>
                {subMenuNumber?.includes(key) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </li>
            )}
          {menuItem?.subMenu && (
            <ul
              className={`submenu ${
                subMenuNumber?.includes(key) ? "active" : ""
              }`}
            >
              {menuItem?.subMenu.map((subMenuItem, key) => (
                <Link
                  to={subMenuItem.path}
                  className={`submenu-list ${isActive(subMenuItem?.path)}`}
                  key={key}
                >
                  &bull;&nbsp;{t(subMenuItem.name)}
                </Link>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Menu;
