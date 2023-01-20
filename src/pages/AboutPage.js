import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/aboutPage.css'
import '../App.css'


function AboutPage() {
    return (
        <div id='body'>
            <NavBar />
            
            <main className='mainContainer'>
                <span className='mid_circle'></span>
                <h2 className='flexCenterContainer h2Title'>
                    <div className='flexRowWrapContainer'>
                        <FaIcons.FaUserAlt /> <span>About</span> <strong>Me</strong>
                    </div>
                </h2>
                <div className='flexRowWrapContainer'>
                    <div className='flexCenterContainer description'>
                        <tag className='span'></tag>
                        <div className='text'>
                            I am a developer based on Buenos Aires, Argentina but born in Ecuador.
                            I am very passionate about improving 
                            my coding skills & developing applications & websites. 
                            I emphasize being hardworking, gentle
                            and creative to give quick and efficient
                            solutions. I have always had good
                            interpersonal relationships, I like to get
                            together with people who want to take
                            on the world.
                        </div>

                        <button className='btnResume'>
                            Resume <FaIcons.FaAngleDown />
                        </button>
                    </div>

                    <div className='imgContainer'>

                    </div>
                </div>
            </main>        

            <Footer />

        </div>  
    )
}

export default AboutPage