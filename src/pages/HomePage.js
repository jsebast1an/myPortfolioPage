import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

/* css */
import '../App.css'



function HomePage() {
  return (
    <div id='body'>
      <NavBar />

      <main className="mainContainer">

        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <h2>
          HomePage
        </h2>
          
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage