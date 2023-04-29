import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

const Technologies = () => {
  return (
    <>
      <section
        id="skill"
        className=" bg-gradient-to-r from-[#000000] via-slate-900 to-[#06072b] md:h-[90vh] "
      >
        <div className="emptydiv h-14 bg-gradient-to-r from-[#000000] via-slate-900 to-[#06072b] mb-4"></div>

        <div className=" flex p-3">
          <h3 className=" bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 text-[#0c0d2a] text-3xl px-3 pr-10 ml-14 rounded-r-full rounded-tr-lg font-medium">
            Technologies{" "}
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col md:flex-row gap-4 mt-3">
          <div className="flex flex-col flex-wrap-reverse gap-4 w-[80%] md:w-[40%]">
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <FaReact className=" w-14 h-14 text-[#61cdff]" />
              <span className="text-2xl text-slate-50">React JS</span>
            </div>

            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <FaNodeJs className=" w-14 h-14 text-[#4faf45]" />
              <span className="text-2xl text-slate-50">Node JS</span>
            </div>
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiMongodb className=" w-14 h-14 text-[#4faf45]" />
              <span className="text-2xl text-slate-50">MongoDB</span>
            </div>
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiTailwindcss className=" w-14 h-14 text-[#61cdff]" />
              <span className="text-2xl text-slate-50">Tailwind CSS</span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap-reverse gap-4 w-[80%] md:w-[40%]">
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiNextdotjs className=" w-14 h-14 text-[#000000] border border-slate-100 rounded-full bg-white" />
              <span className="text-2xl text-slate-50">Next JS</span>
            </div>
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiJavascript className=" w-14 h-14 text-[#eede4c]" />
              <span className="text-2xl text-slate-50">JavaScript</span>
            </div>

            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiCss3 className=" w-14 h-14 text-[#2c69fa]  " />
              <span className="text-2xl text-slate-50">CSS</span>
            </div>
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  p-2">
              <SiBootstrap className=" w-14 h-14 text-[#6851ff] bg-white" />
              <span className="text-2xl text-slate-50">Bootstrap</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
