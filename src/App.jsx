import './App.css'
import Navbar from './components/navbar'
import HowItWorks from './components/Howit'
import Trust from './components/trust'
import AboutBeyond from './components/AboutBeyond'
import MeetGlycomicsShowcase from './components/MeetGlycomicsShowcase'
import WhoGlycomics from './components/WhoGlyco'
import ProductDetailSection from './components/ProductDetailSection'
import PurchaseAssurance from './components/PurchaseAssurance'
import FAQ from './components/faq'
import Footer from './components/footer'
import Meet from './components/MeetGlyco'

function App() {
  return (
    <>
      <Navbar />
      <Meet />
      <Trust />
      <AboutBeyond />
      <MeetGlycomicsShowcase />
      <WhoGlycomics />
      <ProductDetailSection />
      <PurchaseAssurance />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
