import Head from "next/head";
import React, { useState } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>The Abhi Patel</title>
        <meta
          name="description"
          content="the abhi patel | a professional full stack web developer with MERN stack | a web 3.0 blockchain developer with solidity and web3.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="Abhi Patel, the Abhi Patel, theabhipatel, theabhipatel portfolio , developer, web developer, fullstack  developer, mern developer "
        />
        <meta name="subject" content="the Abhi Patel Portfolio" />
        <meta name="copyright" content="the Abhi Patel" />
        <meta name="abstract" content="The Abhi Patel" />
        <meta name="topic" content="the Abhi Patel portfolio" />
        <meta
          name="summary"
          content="This is My(the Abhi Patel's) Portfolio Website"
        />
        <meta name="author" content="The Abhi Patel" />
        <meta name="designer" content="the Abhi Patel" />
        <meta name="owner" content="The Abhi Patel" />
        <meta name="url" content="https://theabhipatel.vercel.app/" />
        <meta
          name="identifier-URL"
          content="https://theabhipatel.vercel.app/"
        />
        <meta name="category" content="Fullstack developer | Portfolio" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <link rel="icon" href="/theabhipatel_fav.jpg" />
      </Head>

      <div className="navbar shadow-md flex justify-between  px-2 sm:px-4 h-16 sticky top-0 bg-gradient-to-b to-slate-900 from-black z-50 ">
        <div className="hamburger flex justify-center items-center text-3xl md:hidden">
          <CgMenuLeftAlt
            className={`text-white ${
              openMenu ? "rotate-180" : ""
            } ease-in duration-300`}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>

        {/* mobile navbar menu  */}
        <div
          className={`absolute top-16 left-0 w-[100%]  transition  ease-in duration-300   bg-slate-900 md:hidden ${
            openMenu ? "" : "-translate-y-[150%]"
          }`}
        >
          <ul className=" flex flex-col  pt-0 pl-3 space-y-1  h-[35vh]  text-slate-300 font-normal text-2xl">
            <li></li>
            <Link to="hero" smooth={true} offset={-200} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Home</li>
            </Link>
            <hr />
            <Link to="skill" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Skill</li>
            </Link>
            <hr />
            <Link to="project" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Project</li>
            </Link>
            <hr />
            <Link to="about" smooth={true} offset={50} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Contact</li>
            </Link>
            <hr />
            <Link to="about" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>About</li>
            </Link>
          </ul>
        </div>

        <div className="logo flex justify-center  items-center md:justify-start text-2xl   w-full">
          <Link to="hero" smooth={true} offset={-200} duration={1000}>
            <div className="cursor-pointer bg-gradient-to-r from-slate-900 via-blue-800 to-blue-900 px-2  rounded-tl-2xl rounded-br-2xl">
              <span className=" text-3xl text-white  font-bold ">
                TheAbhiPatel
              </span>
            </div>
          </Link>
          <div className="nav-items  hidden md:flex justify-end  h-[100%]  w-full  ml-5 ">
            <ul className="flex  items-end justify-center space-x-8  h-[100%] text-slate-400 text-lg font-medium">
              <Link to="hero" smooth={true} offset={-200} duration={1000}>
                {" "}
                <li
                  className={`hover:text-white ease-in  duration-200 cursor-pointer   `}
                >
                  Home
                </li>
              </Link>
              <Link to="skill" smooth={true} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200  cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link to="project" smooth={true} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link to="contact" smooth={true} offset={-70} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link to="about" smooth={true} offset={-63} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  About
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
