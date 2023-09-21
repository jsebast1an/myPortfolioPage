import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

/* css */
import './navBar.css'
import '../../App.css'

const sections = [
    {
        name: 'Home',
        icon: <FaIcons.FaHome />,
        link: '/',
    },
    {
        name: 'About me',
        icon: <FaIcons.FaPersonBooth />,
        link: '/about_me',
    },
    {
        name: 'Skills',
        icon: <FaIcons.FaShekelSign />,
        link: '/skills',
    },
    {
        name: 'Portfolio',
        icon: <FaIcons.FaPortrait />,
        link: '/portfolio',
    },
    {
        name: 'Contact',
        icon: <FaIcons.FaFileContract />,
        link: '/contact',
    },
]

function NavBar() {
    return (

        <div id='body'>

            {/* PC navbar */}            
            <div className='sideBar'>

                <div className='logoContainer'>
                    Juan López
                </div>

                <ul className='menuContainer'> 
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/" end>
                        <li>
                            <FaIcons.FaHome /> Home
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/about_me" end>
                        <li>
                            About me
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/skills" end>
                        <li>
                            Skills
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/portfolio" end>
                        <li>
                            {/* <FaIcons.FaToolbox /> */} Portfolio
                        </li>
                    </NavLink>
                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to="/contact" end>
                        <li>
                            {/* <FaIcons.FaPhoneSquareAlt /> */} Contact
                        </li>
                    </NavLink>
                </ul>

            </div>

            {/* Mobile navbar*/}

            <div className='mobile_nav'>
                <ul>
                    {
                        sections.map((section, index) => (
     
                                <li className='list' key={index}>
                                    <NavLink className={ ({isActive}) => (isActive ? 'active' : '')} to={`${section.link}`} end>
                                        <span className='icon'></span>
                                        <span className='text'>{section.name}</span>
                                    </NavLink>
                                </li>
                                
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar