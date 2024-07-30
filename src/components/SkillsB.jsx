import React from 'react';

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Spring Boot"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Jenkins"],
  },
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="text-white mx-10 py-24">
        <div className="container mx-auto px-5">
          {/* <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 mb-12">
            Skills
          </h2> */}
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
            {skills.map((skill, index) => (
              <div key={index} className="border-l-4 border-gray-200 pl-4">
                <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-lg">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
