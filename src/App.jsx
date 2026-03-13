import './App.css'
import Navbar from './components/navbar'
import HowItWorks from './components/Howit'
import Trust from './components/trust'
import WhoGlycomics from './components/WhoGlyco'
import FAQ from './components/faq'
import Footer from './components/footer'
import Meet from './components/MeetGlyco'

function App() {
  return (
    <>
      <Navbar />
      <Trust />
      <Meet />
       <WhoGlycomics />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
