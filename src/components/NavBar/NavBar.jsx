import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import profilePic from '../../imgs/max2.jpg'
/* css */
import './navBar.css'

function NavBar() {
  return (

    <>
        {/* <div className='navBar'>
            <FaIcons.FaBars className='nav-bars' />
        </div> */}
        <div className='sideBar'>
            <div>
                <img src={profilePic} width={150} height={150} alt='me'></img>
                <h5>Juan Sebastían López</h5>
            </div>

            <div>
                <ul>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/" end>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/portfolio" end>
                        <li>
                            Portfolio
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/contact" end>
                        <li>
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar