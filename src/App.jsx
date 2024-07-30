import { NavBar, Profile, Education, Skills, SkillsB, Projects, About, Experinence, Achievements, Extracurricular, SocialLinks,Contact ,Footer } from './components'

const App = () => {
  return (
    <>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Profile />
        {/* <About /> */}
        <Education />
      </div>
      <div className='gradient-bg-services'>
        {/* <Skills /> */}
        <SkillsB />
        <Projects />
        <Experinence />
      </div>
      <div className='gradient-bg-transactions'>
        <Achievements />
        <Extracurricular />
        <SocialLinks />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App