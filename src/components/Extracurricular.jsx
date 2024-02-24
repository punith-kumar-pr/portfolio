import React from 'react'
import { arrayDestructImg, installNodeImg, navbarImg, reactParallaxImg, reactSmoothImg, reactWeatherImg } from "../assets/portfolio"

const Extracurricular = () => {

  const projects = [
    {
      id: 1,
      src: arrayDestructImg,
    },
    {
      id: 2,
      src: reactParallaxImg,
    },
    {
      id: 3,
      src: navbarImg,
    },

  ];
  return (
    <>
      <section className="mx-10 text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Extracurricular Activities
              </p>
              <p className="py-6">Some extra things</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {projects.map(({ id, src }) => (
                <div className="xl:w-1/3 md:w-1/2 p-4 ">
                  <div className="white-glassmorphism p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-lg text-white-900 font-medium title-font mb-2">Shooting Stars</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
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