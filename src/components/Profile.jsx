import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { profileImg } from '../assets/portfolio';

const Profile = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin /> &nbsp; Linkedin
        </>
      ),
      href: "https://linkedin.com/in/punith-kumar-pr",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub /> &nbsp; Github
        </>
      ),
      href: "https://github.com/punith-kumar-pr",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail /> &nbsp; Mail
        </>
      ),
      href: "mailto:punithkumarpr03@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill /> &nbsp; Resume
        </>
      ),
      href: "/Punith_Kumar_P_R_Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  
  return (
    <>
      <section className="text-white mx-5 md:mx-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-medium">
              Punith Kumar&nbsp;
              <br className="hidden lg:inline-block" />P R
            </h1>
            <p className='sm:text-3xl text-2xl mb-8'>
              Software Engineer
            </p>
            <p className="mb-8 leading-relaxed">
              A Computer Science Engineer eager to contribute to the organisation, enthusiastic about learning new things. Secure a good
              position in the competitive environment that will challenge me to push my boundaries and expand my knowledge.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              {links.map(({ id, child, href, download }) => (
                <a
                  key={id}
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  className="m-2"
                >
                  <button className="inline-flex items-center text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                    {child}
                  </button>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full blue-glassmorphism">
            <img className="object-cover p-5 object-center w-full h-full" alt="hero" src={profileImg} />
          </div>
        </div>
      </section >
    </>
  );
}

export default Profile;