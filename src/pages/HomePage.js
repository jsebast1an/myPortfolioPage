import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

/* css */
import '../App.css'



function HomePage() {
  return (
    <>
      <div className='containerForPages'>

        <NavBar />
        
        <div className="mainContainer">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <h2>
            HomePage
          </h2>
          
        </div>
          
      </div>
      
      <Footer />
    </>
  )
}

export default HomePage