import './App.css'
import { Navbar, About, Features, Home, Pricing, Newsletter } from "../src/components/index.js";
import Footer from './shared/Footer';


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default App
