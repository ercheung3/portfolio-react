import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="eric" />
    </Link>

    <nav>
      <NavLink
        className="home-link"
        exact="true"
        activeclassname="active"
        to="/"
      >
        {/*CHANGE THE ICON COLOR HERE*/}
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        className="about-link"
        exact="true"
        activeclassname="active"
        to="/about"
      >
        {/*CHANGE THE ICON COLOR HERE*/}
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        className="contact-link"
        exact="true"
        activeclassname="active"
        to="/contact"
      >
        {/*CHANGE THE ICON COLOR HERE*/}
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
