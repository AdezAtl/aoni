import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Standards } from './components/Standards'
import { Focus } from './components/Focus'
import { Process } from './components/Process'
import { Snapshot } from './components/Snapshot'
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
