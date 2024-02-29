import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import logoA from '../../assets/images/myLogo.png'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="Navbar">
        <Link className='logo' to='/'>
            <img src={logoA} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/akhilesh-wankhede-1b278b27b/">
                    <CiLinkedin size={24} color='#4d4d4d'/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Neko705">
                    <VscGithub size={22} color='#4d4d4d'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;