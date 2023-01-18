import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../App.css'
import '../css/homePage.css'



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
                Hey there!
              </h4>
              <h5>
                Welcome to my page. 
              </h5>
            </div>
            <button className='about_me'>About me <FaIcons.FaArrowCircleRight /></button>
          </div>

          <div className='flexCenterContainer description' style={{display:'none'}}>
            <tag className='span'></tag>
            <div className='text'>
            I am a developer who likes to create,
            learn and who in the future wants to
            start his own start-up.
            I emphasize being hardworking, gentle
            and creative to give quick and efficient
            solutions. I have always had good
            interpersonal relationships, I like to get
            together with people who want to take
            on the world. I am looking for a
            challenging position where I can
            continue to learn.
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
      
    </div>
  )
}

export default HomePage