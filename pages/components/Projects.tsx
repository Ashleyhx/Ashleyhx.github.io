import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;
  return (
    <div id={projects.title} className="px-8 md:px-16 md:px-32 pb-16 bg-white">
      <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">{projects.title}</h1>
      <div className="projects__menu">
        <ul>
          {projects.projects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12">
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-6">
                  {item.description}
                </p>
                <div className="flex mt-6">
                  <div className="text-xs font-semibold p-0.5">
                    <a href="#ProjectSpaceInvader" className="text-lg">
                      <div className="bg-white">
                        <span className="bg-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                          Laguages: {item.languages}
                        </span>
                      </div>
                    </a>
                  </div>
                  {/* <div className="bg-white ml-2 font-semibold">
                    <a href={item.github} target="_blank" rel="noreferrer">                      
                      <span className="block py-1 px-2 bg-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                        Source Code
                      </span>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="lg:ml-12">
                <Image 
                  src={item.image} 
                  alt="project image" 
                  // className="mt-6 md:mt-12 lg:mt-0 w-full h-auto shadow-lg" 
                  width={0}
                  height={0}
                  sizes = "100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;