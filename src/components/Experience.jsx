import React from 'react'
import { arrayDestructImg, installNodeImg, navbarImg, reactParallaxImg, reactSmoothImg, reactWeatherImg } from "../assets/portfolio"


const Experience = () => {

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
                Experience
              </p>
              <p className="py-6">Check out work experience right here</p>
            </div>
            <div className="flex flex-wrap">
              {projects.map(({ id, src }) => (

                <ul className="py-8 flex flex-wrap md:flex-nowrap border-l-2 border-gray-200 border-opacity-60">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-5">
                    <span className="font-semibold title-font ">CATEGORY</span>
                    <span className="mt-1  text-sm">12 Jun 2019</span>
                  </div>
                  <div className="md:flex-grow ">
                    <h2 className="text-2xl font-medium title-font mb-2 ">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                    <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section >



      {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Experience;
