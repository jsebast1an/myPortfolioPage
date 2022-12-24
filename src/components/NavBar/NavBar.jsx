import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

/* css */
import './navBar.css'
import '../../App.css'

function NavBar() {
  return (

    <div id='body'>
        
        <div className='sideBar'>

            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}


            <ul className='menuContainer'> 
                <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/" end>
                    <li>
                        {/* <FaIcons.FaHome /> */} Home
                    </li>
                </NavLink>
                <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/portfolio" end>
                    <li>
                        {/* <FaIcons.FaToolbox />  */}Portfolio
                    </li>
                </NavLink>
                <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/contact" end>
                    <li>
                        {/* <FaIcons.FaPhoneSquareAlt /> */} Contact
                    </li>
                </NavLink>
            </ul>

        </div>
    </div>
  )
}

export default NavBar