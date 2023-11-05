import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Home",
      link: "home",
    },
  ];

  const showNavItems = navItems.map((ele, index) => {
    return <li key={index}>{ele.name}</li>;
  });

  return (
    <nav className="flex justify-between items-center py-2 px-14 border-b-2">
      <img src={logo} alt="logo" className="w-16" />
      <ul className="flex gap-12">{showNavItems}</ul>
    </nav>
  );
};

export default Navbar;
