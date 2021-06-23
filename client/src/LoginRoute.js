import Register from "views/Register";

const { default: Login } = require("views/Login");

var LoginRoute = [
    {
      path: "/dashboard",
      name: "Login ",
      icon: "nc-icon nc-bank",
      component: Login,
      layout: "/admin",
    },
    {
        path: "/register",
        name: "Register ",
        icon: "nc-icon nc-bank",
        component: Register,
        layout: "/admin",
      }]


export default LoginRoute