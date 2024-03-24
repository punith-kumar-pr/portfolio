import React from "react";

import { html, css, javascript, reactImage, tailwind, nextjs, graphql, github, cpp, java, mongodb, nodejs, postgresql, python, redux, springboot } from '../assets/skills';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: postgresql,
      title: "Postgre",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 13,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-green-400",
    },
  ];

  return (
    // Add these below 2nd line for good styleing
    <section name="skills" className="text-white mx-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
