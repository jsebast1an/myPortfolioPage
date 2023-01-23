import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/homePage.css'
import { NavLink } from 'react-router-dom'
import '../App.css'



function HomePage() {

  return (
    <div id='body'>
      <NavBar />

      <main className="mainContainer">      
        <span className='mid_circle'></span>
        
        <div className='flexRowWrapContainer'>

          <div className='flexCenterContainer main_saludo'>
            <div>
              <h4>
                Hi there!
              </h4>
              <h4>
                I'm <strong>Juan López</strong>
              </h4>
              <h5>
                Welcome to my page. 
              </h5>
            </div>

            <NavLink to={'/about_me'} end style={{textDecoration:'none'}}>
              <button className='about_me'>
                About me <FaIcons.FaArrowCircleRight />
              </button>
            </NavLink>

            <div className='flexRowWrapContainer social_icons'>
              <div class="box">
                  
                  <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                      <FaIcons.FaFacebook />
                  </a>
              </div>
              <div class="box">
                  <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                      <FaIcons.FaGithub />
                  </a>
              </div>
              <div class="box">
                  <a target="_blank" rel='noreferrer' href="https://www.fb.com">
                      <FaIcons.FaLinkedin />
                  </a>
              </div>
            </div>
          </div>

          <div className='flexCenterContainer brokenImgContainer'>
            <tag className='span'></tag>            
            <tag className='span'></tag>            
            <tag className='span'></tag>            
            <tag className='span'></tag>
            <h2>Juan Sebastián López</h2>            
          </div>

        </div>

          
      </main>

      <Footer />
      
    </div>
  )
}

export default HomePage