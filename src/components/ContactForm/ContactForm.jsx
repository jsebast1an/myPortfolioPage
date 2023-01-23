import * as FaIcons from 'react-icons/fa'
import * as Bootstrap from 'react-bootstrap'
/* css */
import './contactForm.css'

function ContactForm() {
    return (
        <div id='contactFormContainer'>
            <h2 className='flexCenterContainer h2Title'>
                <div className='flexRowWrapContainer'>
                    <FaIcons.FaMailBulk /><span>Send me a </span> <strong>message</strong>
                </div>
            </h2>
            
            <div className='contact_form'>
                <Bootstrap.FloatingLabel 
                    controlId='floatingInput'
                    label='Email address'
                    className='mb-3'
                >
                    <Bootstrap.Form.Control 
                        type='email'/>
                        
                </Bootstrap.FloatingLabel>
                
                <Bootstrap.FloatingLabel 
                    controlId='floatingInput'
                    label='Name'
                    className='mb-3'
                >
                    <Bootstrap.Form.Control 
                        type='text'/>

                </Bootstrap.FloatingLabel>

                <Bootstrap.FloatingLabel 
                    controlId='floatingTextarea'
                    label='Message'
                    className='mb-3'
                >
                    <Bootstrap.Form.Control 
                        as='textarea'
                        style={{ height: '100px'}} />

                </Bootstrap.FloatingLabel>
            </div>
            <Bootstrap.Button variant='dark'>Send</Bootstrap.Button>

        </div>
    )
}

export default ContactForm