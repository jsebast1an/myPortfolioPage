import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"


/* css */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ModeBtn from "./components/modeBtn/ModeBtn";




function App() {
    return (
      <BrowserRouter>
        
        <ModeBtn />

        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/about_me" element={ <AboutPage /> } />
          <Route exact path="/skills" element={ <SkillsPage /> } />
          <Route exact path="/portfolio" element={ <PortfolioPage /> } />
          <Route exact path="/contact" element={ <ContactPage /> } />
          
          <Route path="*" element={ <NotFoundPage /> } />

        </Routes>

      </BrowserRouter>
    )
}

export default App;
