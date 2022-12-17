import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import profilePic from '../../imgs/max2.jpg'
/* css */
import './navBar.css'
import '../../App.css'

function NavBar() {
  return (

    <div id='body'>
        
        <div className='sideBar'>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className='picContainer'>
                <img src={profilePic} width={150} height={150} alt='me'></img>
            </div>

            <div className='menuContainer'>
                <ul>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/" end>
                        <li>
                            <FaIcons.FaHome /> Home
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/portfolio" end>
                        <li>
                            <FaIcons.FaToolbox /> Portfolio
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/contact" end>
                        <li>
                            <FaIcons.FaPhoneSquareAlt /> Contact
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar