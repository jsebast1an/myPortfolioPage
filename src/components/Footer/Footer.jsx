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
  };

  window.onmousemove = (e) => animateBubble(e.clientX)


  return (
    <div className='footer flexRowWrapContainer'>

        <div className='footer__box'>
          <img src='' alt='logo' ></img>
          <p className='footer__p'>
            
          </p>
        </div>

        <div className='footer__box'>
          <h3>Pages</h3>
        </div>

        <div className='footer__box'>
          <h3>Projects</h3>
        </div>

        <div className='footer__box'>
          <h3>Social Networks</h3>
        </div>

      <div id="bubble-wrapper"></div>
    </div>  
  )
}
