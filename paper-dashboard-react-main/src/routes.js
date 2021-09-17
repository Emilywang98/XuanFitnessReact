/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Overview from "views/Overview.js";
import TableList from "views/Habits.js";
import Maps from "views/Map.js";
import UserPage from "views/Workout.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/overview",
    name: "Overview",
    // icon: "nc-icon nc-bank",
    component: Overview,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Notifications",
    // icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },

  //Workout page 
  {
    path: "/Workout",
    name: "Add Workout",
    // icon: "FaDumbbell",
    component: UserPage,
    layout: "/admin",
  },

  //Habits page
  {
    path: "/Habits",
    name: "Add Habits",
    // icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },


];
export default routes;
