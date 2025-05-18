import React from "react";

const skillsData = [
    {
        title: "Programming Languages",
        skills: ["C/C++", "Python", "Java", "JavaScript", "SQL"],
    },
    {
        title: "Frameworks",
        skills: ["Android", "Spring Boot", "React", "Node.js", "Redux"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Github", "Docker", "Gitlab CI/CD"],
    },
];

const SkillsSection = () => {
    return (
        <section name="skills" className="text-white mx-10">
            <div className="container px-5 py-24 mx-auto">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillsData.map((section, index) => (
                        <div
                            key={index}
                            className="white-glassmorphism p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">
                                {section.title}
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                {section.skills.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500 transition"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default SkillsSection;
