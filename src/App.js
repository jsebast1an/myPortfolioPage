import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage";


/* css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
    return (
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/portfolio" element={ <PortfolioPage /> } />
          <Route exact path="/contact" element={ <ContactPage /> } />
          
          <Route path="*" element={ <NotFoundPage /> } />

        </Routes>

      </BrowserRouter>
    )
}

export default App;
