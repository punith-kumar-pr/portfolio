import React from 'react'
import { dsceLogo, msPuLogo, spsLogo } from '../assets/education';
const Schools = ({ item }) => {
  return (
    <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-gray-200 border-opacity-60">
      <div className="flex items-center">
        <img src={item.logo} alt={`${item.name} logo`} className="w-10 h-10 mb-4 mr-2 rounded-lg" />
        <h2 className="text-lg sm:text-xl font-medium title-font mb-2">{item.name}</h2>
      </div>
      <p className="text-indigo-500 inline-flex items-center text-lg mb-2"> &bull; {item.duration} </p>
      <h2 className="text-lg sm:text-xl font-medium title-font mb-2">{item.degree}</h2>
      <p className="inline-flex items-center text-lg">
        Grade - <span className='text-indigo-500'>&nbsp; {item.score}</span>
      </p>
    </div>
  );
};

const Education = () => {
  const schools = [
    {
      name: "Dayananda Sagar College of Engineering, Bengaluru",
      degree: "B.E - Computer Science & Engineering",
      score: "9.07 CGPA",
      duration: "2020 - 2024",
      logo: dsceLogo
    },
    {
      name: "M.S PU College, Kolar",
      degree: "12th standard",
      score: "91.33%",
      duration: "2018 - 2020",
      logo: msPuLogo
    },
    {
      name: "Sainik Public School, Kolar",
      degree: "SSLC (10th standard)",
      score: "93.12%",
      duration: "2017 - 2018",
      logo: spsLogo
    }
  ];

  return (
    <>
      <section name="education" className="text-white mx-10">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>
          <br/><br />
          <div className="flex flex-wrap py-14">
            {schools.map((school, index) => (
              <Schools key={index} item={school} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
