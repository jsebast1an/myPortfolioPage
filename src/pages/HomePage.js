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

        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        

        <div className='flexRowWrapContainer'>
          
          
          <div className='flexCenterContainer brokenImgContainer'>
            <tag className='span'></tag>            
            <tag className='span'></tag>            
            <tag className='span'></tag>            
            <tag className='span'></tag>
            <h2>Juan Sebastián López</h2>            
          </div>

          <div className='flexCenterContainer description'>
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

        </div>
          
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage