import design from '../imgs/about_design.png'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/aboutPage.css'
import '../App.css'


function AboutPage() {
    return (
        <div id='about'>
            
            <h2 className='flexCenterContainer h2Title about_title'>
                <div className='flexRowWrapContainer'>
                    <FaIcons.FaUserAlt /> <span>About</span> <strong>Me</strong>
                </div>
            </h2>
            <div className='flexRowWrapContainer'>
                <div className='imgContainer'>
                    <img src={design} alt='a' />
                </div>

                <div className='about_description'>
                    <div className='about_description_title'>
                        &lt;Coder /&gt;
                    </div>
                    <p className='about_description_text'>
                        I am a developer based on Buenos Aires, Argentina but born in Ecuador.
                        I am very passionate about improving 
                        my coding skills & developing applications & websites. 
                        I emphasize being hardworking, gentle
                        and creative to give quick and efficient
                        solutions. I have always had good
                        interpersonal relationships, I like to get
                        together with people who want to take
                        on the world.
                    </p>
                    <div className='flexCenterContainer'>
                        <button className='btnResume'>
                            Resume <FaIcons.FaAngleDown />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutPage