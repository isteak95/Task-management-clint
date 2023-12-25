import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/AddTask/AddTask";
import TaskManagement from "../Pages/TaskManagement/TaskManagement";
import AllTask from "../Pages/AllTask/AllTask";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>

      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>


      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>

      }
    ]

  },
  {

    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/taskmanagement",
        element: <TaskManagement></TaskManagement>
      },
      {
        path: "/dashboard/addtask",
        element: <AddTask></AddTask>
      },
      {
        path: "/dashboard/alltask",
        element: <AllTask></AllTask>
      },


    ]
  }
]);

export default router;