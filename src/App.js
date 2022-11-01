import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




/* css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/portfolio" />
        <Route path="/contact" />
        <Route path="/extras" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
