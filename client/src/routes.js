//
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/UpdatePrisoner";
import UpgradeToPro from "views/Upgrade.js";
import AddPrison from "views/AddPrison";
import AddPrisoner from "views/AddPrisoner";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  
 
  {
    path: "/add-prison",
    name: "Add New Prison",
    icon: "nc-icon nc-single-02",
    component: AddPrison,
    layout: "/admin",
  },
  {
    path: "/add-criminal",
    name: "Add New Criminal",
    icon: "nc-icon nc-single-02",
    component: AddPrisoner,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Update Prisoner",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "LIST",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
 

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
  
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
    
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  {

    path: "/upgrade",
    name: "© Piyush And Shaurya",
    icon: "",
    component: UpgradeToPro,
    layout: "/admin",
    pro: true,
  },

];
export default routes;
