import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../../assets/logo/Logo-01.png";
import control from "../../../../assets/logo/control.png";
import user from "../../../../assets/logo/single photo png (1).png";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (!open) {
      setMenuOpen(false);
    }
  }, [open]);
  const Menus = [
    {
      title: "Dashboard",
      src: <Icon icon="file-icons:dashboard" color="white" />,
      link: "/admin",
    },
    {
      title: "Blog",
      src: <Icon icon="bxl:blogger" color="white" />,
      link: "#blog",
      subLink: [
        {
          title: "AddBlog",
          src: <Icon icon="carbon:add-filled" color="white" />,
          Slink: "#blog/AddBlog",
        },
        {
          title: "UpdateBlog",
          src: "Chat",
          Slink: "blog/AddBlog",
        },
      ],
    },
    // { title: "Accounts", src: "User", gap: true },
    { title: "Accounts", src: "User" },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
  ];
  const menuAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const menuItemAnimation = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
  };
  return (
    <div>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-DarkNevy  h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer w-24 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              IELTS
            </h1>
          </div>
          <div className="flex flex-col gap-x-4 items-center mt-5">
            <img
              src={user}
              className={`cursor-pointer w-20 rounded-full bg-white duration-500 ${
                open && "rotate-[0deg]"
              }`}
            />
            <h1
              className={`text-white origin-left mt-2 font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Rabbinur
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => {
              if (Menu.subLink) {
                return (
                  <div key={index} onClick={toggle} className="duration-300">
                    <Link to={Menu.link} className="">
                      <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer
 hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                      >
                        {" "}
                        <span title={Menu.title}>{Menu.src}</span>
                        <span
                          title={Menu.title}
                          className={`${
                            !open && "hidden"
                          } origin-left duration-200 flex items-center gap-2`}
                        >
                          {Menu.title}
                          <AnimatePresence>
                            {open && (
                              <motion.div
                                animate={
                                  isMenuOpen
                                    ? {
                                        rotate: -90,
                                      }
                                    : { rotate: 0 }
                                }
                              >
                                <Icon
                                  icon="uil:angle-down"
                                  color="white"
                                  width={25}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </span>
                      </li>
                    </Link>
                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div
                          variants={menuAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                        >
                          {Menu.subLink.map((sub, i) => (
                            <motion.div
                              variants={menuItemAnimation}
                              key={i}
                              custom={i}
                            >
                              <Link to={sub.Slink} className="">
                                <li
                                  className={`flex  rounded-md p-2 cursor-pointer
      hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
   ${Menu.gap ? "mt-9" : "mt-2 ml-5"}  `}
                                >
                                  <span title={sub.title}>{sub.src}</span>
                                  <span
                                    title={sub.title}
                                    className={`${
                                      !open && "hidden"
                                    } origin-left duration-200`}
                                  >
                                    {sub.title}
                                  </span>
                                </li>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link key={index} to={Menu.link} className="">
                  <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer
   hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                  >
                    {" "}
                    <span title={Menu.title}>{Menu.src}</span>
                    <span
                      title={Menu.title}
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="mt-5">
            {" "}
            <h1 className="text-white flex items-center gap-2 rounded-md p-2 cursor-pointer hover:bg-light-white">
              <Icon icon="solar:logout-2-outline" color="white" /> Logout
            </h1>
          </div>
        </div>
        <div className="h-screen flex-1 p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
