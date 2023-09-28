import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import ModeBtn from "./components/modeBtn/ModeBtn"


/* css */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <div id="App">
      <NavBar />

      <HomePage />

      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App;
