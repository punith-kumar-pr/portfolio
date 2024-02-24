import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Profile = () => {
  return (
    <>
      <section className="text-white mx-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Punith&nbsp;
              <br className="hidden lg:inline-block" />Kumar P R
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                <FaLinkedin />
                &nbsp; Connect
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 blue-glassmorphism">
            <img className="object-cover p-5 object-center" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;
