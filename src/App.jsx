import { NavBar, Profile, Education, Skills, Projects, About, Experinence, Achievements, Extracurricular, Footer } from './components'

const App = () => {
  return (
    <>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Profile />
        <About />
        <Education />
      </div>
      <div className='gradient-bg-services'>
        <Skills />
        <Projects />
        <Experinence />
      </div>
      <div className='gradient-bg-transactions'>
        <Achievements />
        <Extracurricular />
        <Footer />
      </div>


    </>

  )
}

export default App