import React from 'react'

const Experience = () => {

  const projects = [
    {
      id: 3,
      role: "Software Engineer",
      period: "Mar 2025 - Present",
      company: "Motorola",
      place: "Bengaluru",
      description:
        [
          "Android Development",
        ]

    },
    {
      id: 2,
      role: "Associate Engineer Intern",
      period: "Jan 2024 - Jul 2024",
      company: "BT Group (British Telecom)",
      place: "Bengaluru",
      description:
        [
          "Java, Spring Boot, React.js, Redux, PostgreSQL, MySQL, MariaDB, Gitlab CI/CD, Docker.",
"Developed web applications using Java Spring Boot and PostgreSQL and created front-end applications with React.js and styled using TailwindCSS.",
"Implemented reactive programming (project reactor) to enhance Spring Boot applications.",
"Containerized applications using Docker, employed Docker-in-Docker (DinD) for Gitlab CI/CD pipelines."

        ]
    },
    {
      id: 3,
      role: "Intern",
      period: "Jun 2022 - Jan 2023",
      company: "Brane Enterprises Pvt. Ltd.",
      place: "Bengaluru",
      description:
        [
          "Java, Spring boot, Postman",
          "Analysed and implemented functions required for the existing application.", 
          "Debugging the bugs present in the apps."
        ]

    },

  ];
  return (
    <>
      <section name="experience" className="mx-10 text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Experience
              </p>
              <p className="py-6">Check out work experience right here</p>
            </div>
            <div className="flex flex-wrap">
              {projects.map(({ id, role, period, company, place, description }) => (

                <ul key= {id} className="py-8 flex flex-wrap md:flex-nowrap border-l-2 border-gray-200 border-opacity-60">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-5">
                    <span className="font-semibold text-xl">
                      {role}
                    </span>
                    <span className="mt-1 text-indigo-500 text-sm">
                      {period}
                    </span>
                  </div>
                  <div className="md:flex-grow md:ml-0 ml-5">
                    <h2 className="text-2xl font-medium mb-2 ">{company}, {place}</h2>
                    {description.map((item, index) =>
                      <p key={index} className="text-gray-300 leading-relaxed">
                        &bull; {item}
                      </p>
                    )}
                    {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                  </div>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Experience;
