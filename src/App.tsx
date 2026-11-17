import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Standards } from './components/Standards'
import { Focus } from './components/Focus'
import { Process } from './components/Process'
import { Snapshot } from './components/Snapshot'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Standards />
        <Focus />
        <Process />
        <Snapshot />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
