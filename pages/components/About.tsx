import React from "react";
import config from "../index.json";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-cyan-300 via-purple-500 to-sky-300">
      <h1 className="pt-20 uppercase font-bold text-center text-white text-bold text-4xl">{about.title}</h1>
      
        <div className="pt-12 md:py-0 text-white md:ml-4 text-left">   
          <div className="about__primary py-4">
            <span>{about.primary}</span>
          </div>
          <div className="mt-1">
            <span>{about.secondary}</span>
          </div>
        </div>
                
            
      <div className="flex justify-center text-white mt-10">
          <a href={about.githubUrl} className="icon-link">
              <FaGithub size={30} className="mr-4" />
            </a>
          <a href={about.linkedinUrl} className="icon-link">
            <FaLinkedin size={30} className="mr-4" />
          </a>
          <a href={about.email} className="icon-link">
            <FaEnvelope size={30} />
          </a>
        </div>
    </div>
  );
};

export default About;