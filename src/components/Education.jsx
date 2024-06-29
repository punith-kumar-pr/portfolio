import React from 'react'

const Schools = ({ item }) => {
  // <div classNameName="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
  //   <h2 classNameName="text-lg sm:text-xl font-medium title-font mb-2">{item.name}</h2>
  //   <p classNameName="text-purple-500 inline-flex items-center text-lg">
  //     {item.score}
  //   </p>
  //   <h2 classNameName="text-lg sm:text-xl font-medium title-font mb-2">hello</h2>
  //   <p classNameName="text-purple-500 inline-flex items-center">
  //     hello
  //   </p>
  // </div>
  <p>Hello</p>
};

const Education = () => {

  const schools = [
    {
      name: "Dayananda Sagar College of Engineering, Bengaluru",
      degree: "B.E - Computer Science & Engineering",
      score: "9.07 CGPA",
      duration: "2020 - 2024"
    },
    {
      name: "M.S PU College Kolar",
      degree: "12th",
      score: "91.33%",
      duration: "2018 - 2020"
    },
    {
      name: "Sainik Public School, Kolar",
      degree: "SSLC (10th)",
      score: "93.12%",
      duration: "2017 - 2018"
    }
  ]
  return (
    <>
      <section  name="education" className="text-white mx-10">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>
          <br/><br />
          <div className="flex flex-wrap py-14">
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                B.E - Computer Science & Engineering
              </h2>
              <p className="text-indigo-500 inline-flex items-center text-lg">
                &bull; 9.07 CGPA
              </p>
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                Dayananda Sagar College of Engineering, Bengaluru
              </h2>
              <p className="text-indigo-500 inline-flex items-center">
                &bull; 2020 - 2024
              </p>
            </div>

            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                12th
              </h2>
              <p className="text-indigo-500 inline-flex items-center text-lg">
                &bull; 91.33%
              </p>
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                M.S PU College, Kolar
              </h2>
              <p className="text-indigo-500 inline-flex items-center">
                &bull; 2018 - 2020
              </p>
            </div>

            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                SSLC (10th)
              </h2>
              <p className="text-indigo-500 inline-flex items-center text-lg">
                &bull; 93.12%
              </p>
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                Sainik Public School, Kolar
              </h2>
              <p className="text-indigo-500 inline-flex items-center">
                &bull; 2017 - 2018
              </p>
            </div>

          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button> */}
        </div>
      </section>
    </>
  )
}

export default Education