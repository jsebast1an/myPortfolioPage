import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

/* css */
import '../App.css'
import '../css/homePage.css'



function HomePage() {
  return (
    <div id='body'>
      <NavBar />

      <main className="mainContainer">

        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className='flexRowWrapContainer'>
          
          <div className='flexCenterContainer description'>
            <h2>Hi! I am Juan Sebastián</h2>
            <div>
              Me gusta esto y esto y esto y esto y esto y esto y esto y esto y esto y est o y esto
            </div>
          </div>

          <div className='flexCenterContainer'>
            
          </div>

        </div>
          
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage