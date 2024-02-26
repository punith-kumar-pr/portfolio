import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { profileImg } from '../assets/portfolio'

const Profile = () => {
  return (
    <>
      <section className="text-white mx-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-medium">
              Punith Kumar&nbsp;
              <br className="hidden lg:inline-block" />P R

            </h1>
            <p className='sm:text-3xl text-2xl mb-8'>
              Full Stack Developer
            </p>
            <p className="mb-8 leading-relaxed">
              A Computer Science Engineer eager to contribute to the organisation, enthusiastic about learning new things. Secure a good
              position in the competitive environment that will challenge me to push my boundaries and expand my knowledge.
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/punith-kumar-pr" target="_blank" >
                <button className="inline-flex items-center text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                  <FaLinkedin />
                  &nbsp; Connect
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-3/4 w-7/8 blue-glassmorphism">
            <img className="object-cover p-5 object-center" alt="hero" src={profileImg} />
          </div>
        </div>
      </section >
    </>
  )
}

export default Profile;
