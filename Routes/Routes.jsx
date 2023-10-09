import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blog from "../Pages/Blogs/Blog";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Team from "../Pages/Team/Team";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appoinment/Appointment";
import SignUp from "../Pages/Login/SignUp";
import CountryDetails from "../Pages/Courses/CountryDetails";
import CourseDetails from "../Pages/Courses/CourseDetails";
import NotFound from "../Pages/NotFound/NotFound";
import AboutAtm from "../Pages/AboutAtm's/AboutAtm";
import Country from "../Pages/Country/Country";
import Visa from "../Pages/Visa/Visa";
import Admission from "./../Pages/Admission/Admission";
import Profile from "../Pages/Profile/Profile";
import AdminLayout from "../../Admin/Components/AdminLayout/AdminLayout";
import Dashboard from "../../Admin/Components/Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/study",
        element: <Country />,
      },
      {
        path: "/visa",
        element: <Visa />,
      },
      {
        path: "/blog/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path: "/course/countryDetails/:id",
        element: <CountryDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <AboutAtm />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
    ],
  },
]);
