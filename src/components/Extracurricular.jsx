import React from 'react'
import { iotClubImg, nssImg } from "../assets/portfolio"

const Extracurricular = () => {

  const activities = [
    {
      id: 1,
      title: "Lead",
      src: iotClubImg,
      alt: "Iot Club logo",
      name: "IoT Innovation Club, DSCE",
      period: "Dec 2021 - May 2024",
      description:
        [
          "The IoT Club in DSCE endeavours to teach students about IoT and get them interested in innovation and research.",
          "As a lead of this club, I conducted 10+ workshops on Arduino, ESP32, etc."
        ]
    },
    {
      id: 2,
      title: "Volunteer",
      src: nssImg,
      name: "National Service Scheme (NSS), DSCE",
      period: "May 2022 - May 2024",
      description:
        [
          "Organised many awareness & social related programs to society and students.",
          "Organised camps, worked at govt. schools and remote areas"
        ]
    },

  ];
  return (
    <>
      <section name="extracurricular" className="mx-10 text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Extracurricular Activities
              </p>
              <p className="py-6">Some extra things</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {activities.map(({ id, title, src, name, alt, period, description }) => (
                <div className="xl:w-1/2 md:w-1/2 p-4 ">
                  <div className="white-glassmorphism p-6 rounded-lg">
                    {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <img src={src} alt={alt} className='rounded-2xl' />
                    </div> */}
                    <div className='flex items-center '>
                      <img src={src} alt={`${alt} logo`} className="mt-2 w-10 h-10 mb-4 mr-2 rounded-full" />
                      <div>
                        <h2 className="text-lg text-white-900 font-medium title-font">
                        {name}
                        </h2>
                        <p className="text-lg text-white-900 font-medium title-font">
                          {title} &nbsp;
                        <span className="text-purple-400 text-sm">
                          {period}
                        </span>
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-gray-400 text-base">
                      {description.map((item) =>
                        <p className="leading-relaxed">
                          &bull; {item}
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Extracurricular;