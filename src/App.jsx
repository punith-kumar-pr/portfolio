import { NavBar, Profile, Education, Skills, SkillsB, Projects, About, Experinence, Achievements, Extracurricular, SocialLinks,Contact ,Footer } from './components'

const App = () => {
  return (
    <>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Profile />
        {/* <About /> */}
        <Experinence />
      </div>
      <div className='gradient-bg-services'>
        <Education />
        {/* <Skills /> */}
        <SkillsB />
        <Projects />
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