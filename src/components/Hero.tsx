import React from "react";
// import Link from 'next/link';
import { Link } from "react-scroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="bg-gradient-to-b md:bg-gradient-to-r from-[#000000] via-slate-900 to-[#06072b] h-[90vh]"
      >
        <div className="flex justify-center md:justify-end  gap-36 mr-10 ml-20  ">
          <div className="about flex flex-col justify-center items-center     mt-[90%] sm:mt-[50%]  md:mt-16">
            <div className=" flex flex-col justify-center">
              <span className="text-white text-2xl ">I am A</span>
              <span className="text-white text-6xl">FullStack</span>
              <span className="text-white text-6xl">Developer</span>
            </div>

            <div className="flex  justify-center gap-5 mt-4 bg-slate-800 p-2 pr-5 w-[95%] rounded-full">
              <div className="box flex justify-start items-center     ">
                <FaReact className=" w-8 h-8 hover:text-[#61cdff] ease-in duration-200 hover:scale-125  text-[#61cdffd8] animate-spin-slow " />
              </div>
              <div className="box flex justify-start items-center     ">
                <SiNextdotjs className=" w-8 h-8  ease-in duration-200 hover:scale-125 text-[#000000] border border-slate-100 rounded-full bg-slate-300 hover:bg-white" />
              </div>
              <div className="box flex justify-start items-center     ">
                <FaNodeJs className=" w-8 h-8 hover:text-[#4faf45] ease-in duration-200 hover:scale-125 text-[#50af45db]" />
              </div>
              <div className="box flex justify-start items-center     ">
                <SiJavascript className=" w-8 h-8 text-[#eede4cd6] ease-in duration-200 hover:scale-125 hover:text-[#eede4c] bg-black" />
              </div>
            </div>

            <div className="group bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer">
              <Link
                className="flex items-center gap-2  px-3 py-1"
                to="skill"
                smooth={true}
                duration={1000}
              >
                <span> Know More </span>
                <MdPlayArrow className="group-hover:rotate-90 duration-300 h-8 w-8" />
              </Link>
            </div>
          </div>

          <div className="img  hidden md:block  mt-1  ">
            <img
              width={400}
              src="abhiBG.png"
              alt=""
              className="drop-shadow-lg"
            />
            {/* </span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
