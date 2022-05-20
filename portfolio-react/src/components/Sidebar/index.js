import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoNoBgBlk from '../../assets/images/logo-nobg-black.png'
import LogoNoBgWht from '../../assets/images/logo-nobg-white.png'
import LogoBgBlk from '../../assets/images/logo-bg-black.png'
import LogoBgWht from '../../assets/images/logo-bg-white.png'
import LogoSubtitle from '../../assets/images/logo-subtitle-black-montserrat.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = (props) => {
  const [headerActive, setHeaderActive] = useState()
  const [navClass, setNavClass] = useState('nav-bar')
  console.log(props.navClass)
  //default value OR value sent from prop should be the logic
  return (
    <div className={props.navClass}>
      <Link className="logo" to="/">
        <img src={LogoBgBlk} alt="logo" />
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

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ercheung3/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d42" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ercheung3"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d42" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faSquare} color="#4d4d42" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
