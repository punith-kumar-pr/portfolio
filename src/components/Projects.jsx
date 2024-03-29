import React from "react";

import { arrayDestructImg, installNodeImg, navbarImg, reactParallaxImg, reactSmoothImg, reactWeatherImg, lipiImg, topologyImg } from "../assets/portfolio"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestructImg,
      project: "News-connect",
      techstack: "React.js, Node.js, Express.js, MongoDB, Web-scrapping",
      description: "This Application helps users to search the articles based on the keyword and also use time period filtering for articles. Also, this is a platform to share the news to this app's users community.",
    },
    {
      id: 2,
      src: reactParallaxImg,
      project: "JWT Authentication",
      techstack: "React.js, Node.js, Express.js, MongoDB, JWT Tokens, Tailwindcss",
      description: "This demonstrates how to secure a web application by user authentication using JWT tokens, and login in via \"User Login\" Page and register via \"Register Page\".",
    },
    {
      id: 3,
      src: lipiImg,
      project: "Lipi",
      techstack: "Node.js, Express.js, MongoDB, ejs, Tessaract, Google Translate Api",
      description: "Lipi is a Application where a user can upload the photos of a various scripts of different languages (typed, hand-written or manuscripts), and it extracts the text from the script; Also user can translate into various other languages.",
    },
    {
      id: 4,
      src: lipiImg,
      project: "IoT based two side safety vehicles",
      techstack: "Node.js, Express.js, MongoDB, ejs, Tessaract, Google Translate Api",
      description: "Lipi is a Application where a user can upload the photos of a various scripts of different languages (typed, hand-written or manuscripts), and it extracts the text from the script; Also user can translate into various other languages.",
    },
    {
      id: 5,
      src: topologyImg,
      project: "College Network Design",
      techstack: "Cisco Packet Tracer, Computer Networks",
      description: "The is a simulation of a college network done in cisco packet tracer. Some features include: DHCP, RIP, DNS, Web server(HTTP), Secure Routing",
    },
  ];

  return (
    <>
      <section name="projects" className="mx-10 text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Projects
              </p>
              <p className="py-6">Check out some of my work below</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {projects.map(({ id, src, project, techstack, description }) => (
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={src} alt="blog" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-white mb-3">{project}</h1>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{techstack}</h2>
                      <p className="leading-relaxed mb-3">{description}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Code
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>


    </>
  );
};

export default Projects;
