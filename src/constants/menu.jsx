import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const menu = [
  {
    name: "menu.home",
    path: "/",
    role: ["User", "Admin"],
    icon: <FaHome />,
  },
  {
    name: "menu.clinicManagement",
    role: ["Admin"],
    icon: <FaBuilding />,
    subMenu: [
      {
        name: "menu.addClinic",
        path: "/firma-ekle",
      },
      {
        name: "menu.clinicList",
        path: "/firma-listesi",
      },
    ],
  },
];

export default menu;
