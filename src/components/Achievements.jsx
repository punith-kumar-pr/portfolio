import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      id: 2,
      givenAt: "Project Open Day 2024, DSCE",
      date: "11 May 2024",
      award: "Best Project Award",
      description:
        [
          "We got this award for our project AR Sculp in Project Open Day where all the final year projects are presented."
        ]
    },
    {
      id: 1,
      givenAt: "Hackathon ++",
      date: "Nov 2022",
      award: "Top 5",
      description:
        [
          "We were one of the Top 5 teams in a hackathon held at the Dept. of CSE, DSCE.",
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
                Achievements
              </p>
              <p className="py-6">Not many but some 😁😁</p>
            </div>
            <div className="flex flex-wrap">
              {achievements.map(({ givenAt, date, award, description }) => (

                <ul className="py-8 flex flex-wrap md:flex-nowrap border-l-2 border-gray-200 border-opacity-60">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-5">
                    <span className="font-semibold text-2xl">
                      {award}
                    </span>
                    <span className="mt-1 text-indigo-500 text-sm">
                      {date}
                    </span>
                  </div>
                  <div className="md:flex-grow md:ml-0 ml-5">
                    <h2 className="text-2xl font-medium mb-2 ">{givenAt}</h2>
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

export default Achievements;