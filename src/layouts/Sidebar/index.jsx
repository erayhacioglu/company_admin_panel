import "./sidebar.scss";
import cn from "classnames";
import Menu from "../Menu";

const Sidebar = ({sidebar}) => {
  return (
    <div
      className={cn({
        sidebar: true,
        open: sidebar,
      })}
    >
      <div className="sidebar_header">
        <img src="https://www.anadolu.edu.tr/uploads/anadolu/ckfinder/web/files/T%C3%9CRK%C3%87E%20LOGOLAR%20Anadolu%20%C3%9Cniversitesi-01(1).png" alt="" className="sidebar_header_logo"/>
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
