import LogoNoBgBlk from '../../assets/images/logo-nobg-black.png'
import LogoNoBgWht from '../../assets/images/logo-nobg-white.png'
import LogoBgBlk from '../../assets/images/logo-bg-black.png'
import LogoBgWht from '../../assets/images/logo-bg-white.png'
import LogoSubtitle from '../../assets/images/logo-subtitle-black-montserrat.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import MenuToggle from '../MenuToggle'
import './index.scss'

const Header = () => {
  const [navClass, setNavClass] = useState('nav-bar')

  const [isOpen, setOpen] = useState(true)

  const toggleIsOpen = () => {
    if (isOpen) setNavClass('nav-bar hidden')
    else setNavClass('nav-bar')

    setOpen(!isOpen)
  }

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
          <img src={LogoBgBlk} alt="logo" />
        </Link>
        <MenuToggle isOpen={isOpen} toggle={toggleIsOpen} />
      </div>

      <Sidebar navClass={navClass} />
    </>
  )
}

export default Header
