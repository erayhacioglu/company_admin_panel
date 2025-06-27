import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import cn from "classnames";

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <main
        className={cn({
          content: true,
          active: !sidebar,
        })}
      >
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className="container">
          <div className="page">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
