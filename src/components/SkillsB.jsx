import React from 'react';

const skills = [
  {
    category: "Programming Languages",
    items: ["C/C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Android", "Spring Boot", "React", "Node.js", "Redux"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Github", "Docker", "Gitlab CI/CD"],
  },
];

const colors = [
  "bg-blue-600 text-white",
  "bg-teal-500 text-white",
  "bg-green-600 text-white",
  "bg-purple-500 text-white",
];

const SkillCard = ({ name, color }) => {
  return (
    <div className={`flex items-center justify-center ${color} rounded-lg p-4 w-28 h-10 shadow-lg hover:scale-105 transition-transform duration-200`}>
      <span className="text-sm font-semibold text-center">{name}</span>
    </div>
  );
};

const SkillCategory = ({ category, items, color }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <SkillCard key={index} name={item} color={color} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <section id="skills" name="skills" className="text-white mx-10 py-24">
        <div className="container mx-auto px-5">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="p-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCategory
                key={index}
                category={skill.category}
                items={skill.items}
                color={colors[index % colors.length]}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
