import * as AiIcons from 'react-icons/ai'



/* css */
import './footer.css'
import '../../App.css'



export default function footer() {

  const animateBubble = (x) => {
    const wrapper = document.getElementById("bubble-wrapper");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 1300);
  }

  window.onmousemove = (e) => animateBubble(e.clientX)


  return (
    <div className='footer flexRowWrapContainer'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <div className='footer__box'>
        <h5>Pages</h5>
      </div>

      <div className='footer__box'>
        <h5>Projects</h5>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiOutlineGithub /> React Store
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiOutlineGithub /> E-commerce Backend
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiOutlineGithub /> Fake Chat
        </a>
      </div>

      <div className='footer__box'>
        <h5>Social Networks</h5>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiFillFacebook /> Facebook
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiFillLinkedin /> LinkedIn
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.fb.com">
            <AiIcons.AiFillInstagram /> Instagram
        </a>
      </div>

      <div id="bubble-wrapper"></div>
    </div>  
  )
}
