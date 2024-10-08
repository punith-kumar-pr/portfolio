import { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll"
import logo from '../assets/Punith_P_logo.jpeg';

const NavBarItem = ({ title, classprops }) => (
  <Link to={title.toLowerCase()} smooth duration={500}>
    <p className={`cursor-pointer ${classprops}`}>{title}</p>
  </Link>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuItems = ["Education", "Skills", "Projects", "Experience", "Achievements", "Extracurricular", "Contact"]

  return (
    <>
      <header className="white-glassmorphism-plain text-white fixed top-0 w-full z-50">
        <div className="container mx-auto flex flex-wrap p-5 w-3/4 md:w-full justify-between">
          <a className="flex font-medium mb-1 items-center md:mb-0 md:mx-0 -mx-3">
            <img src={logo} alt="logo" className='w-10 rounded-full'/>
            <p className='text-3xl hover:'>&nbsp;Punith</p>
          </a>
          <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
            {menuItems.map((item, index) => (
              <NavBarItem key={item + index} title={item} classprops={"mx-3"} />
            ))}
          </nav>

          {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white flex md:hidden cursor-pointer w-1/4 md:mx-0 -mx-10" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )}
          {toggleMenu && (
            <ul
              className="z-50 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-3"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
              {menuItems.map((item, index) => (
                <NavBarItem key={item + index} title={item} classprops="my-3 mx-10 text-lg" />
              ))}
            </ul>
          )}
        </div>
      </header>
      {/* Placeholder to maintain space after making header fixed */}
      <div className="h-20 md:h-0"></div>
    </>
  )
}

export default NavBar;
