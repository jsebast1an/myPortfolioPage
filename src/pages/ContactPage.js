import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as FaIcons from 'react-icons/fa'
/* css */
import '../css/contactPage.css'
import '../App.css'
import ContactForm from '../components/ContactForm/ContactForm'

function ContactPage() {
    return (
        <div id='body'>

            <NavBar />

            <main className='mainContainer'>
                {/* <h2 className='flexCenterContainer h2Title'>
                    <div className='flexRowWrapContainer'>
                        <FaIcons.FaPhone /> <span>Contact</span> <strong>Me</strong>
                    </div>
                </h2> */}

                <div className='contactContainer'>

                    <div className='contact_intro'>

                        <h2>
                            Let's chat.
                        </h2>
                        <h4>
                            Tell <strong>me</strong> about
                            your project.
                        </h4>
                        <p>
                            We can create something together.
                        </p>

                        <div className='contact_intro_social flexRowWrapContainer social_icons'>
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
                    </div>

                    <ContactForm />

                </div>

            </main>

            <Footer />

        </div>
    )
}

export default ContactPage