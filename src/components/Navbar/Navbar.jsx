import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "FAQS",
      link: "/faqs",
    },
  ];

  const mobileNavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "features",
      link: "/features",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "FAQS",
      link: "/faqs",
    },
  ];

  return (
    <>
      <nav className=" fixed top-0 w-full h-24 z-10 bg-gradient-to-r from-[#1B544E] via-[#043F2D] to-[#043F2D] md:border md:border-b-2 md:border-[#556765] md:rounded-br-[20px] md:rounded-bl-[20px]">
        <div className="flex items-center md:justify-start justify-between h-full w-full hsection md:space-x-28">
          <Link to="/">
            <img src={logo} />
          </Link>
          <div>
            <div className="sm:flex hidden items-center justify-between gap-10">
              {navLinks.map((link) => {
                return (
                  <NavLink
                    className="text-white "
                    key={link.name}
                    to={link.link}>
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div onClick={handleNav} className="h-8 w-8 md:hidden cursor-pointer">
            {menuOpen ? (
              // Cancel Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#000000">
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#000000">
                <path
                  fillRule="evenodd"
                  d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        {/* mobileNav */}
        <div
          className={
            menuOpen
              ? "fixed left-0 top-[5.5rem] w-[65%] sm:hidden h-96 bg-gradient-to-r from-[#1B544E] via-[#043F2D] to-[#043F2D] p-10 ease-in duration-500"
              : "fixed left-[100%] top-5.5rem] p-10 ease-in duration-500"
          }>
          <div className="flex flex-col justify-between h-fit w-full">
            <div className="flex flex-col gap-10 text-white text-center font-[500]">
              {mobileNavLinks.map((link) => (
                <NavLink key={link.name} href={link.link}>
                  <div
                    onClick={closeMobileMenu}
                    className="list-none cursor-pointer">
                    {link.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
