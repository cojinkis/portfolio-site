import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import LogoS from '../../assets/images/website sidebar photo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <p className='caption'>Lucas Scott</p>
        </Link>
        <nav>
            <NavLink activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink  activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink  activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faLightbulb} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul >
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/lucas-scott16/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#f2622a'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href='https://github.com/cojinkis'>
                    <FontAwesomeIcon icon={faGithub} color='#f2622a'/>
                </a>
            </li>
        </ul>
    </div>
) 

export default Sidebar