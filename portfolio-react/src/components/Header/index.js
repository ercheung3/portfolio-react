import LogoNoBgBlk from '../../assets/images/logo-nobg-black.png'
import LogoNoBgWht from '../../assets/images/logo-nobg-white.png'
import LogoBgBlk from '../../assets/images/logo-bg-black.png'
import LogoBgWht from '../../assets/images/logo-bg-white.png'
import LogoSubtitle from '../../assets/images/logo-subtitle-black-montserrat.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import './index.scss'

const Header = () => {
  const [navClass, setNavClass] = useState('nav-bar')

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
          <img src={LogoBgBlk} alt="logo" />
        </Link>
        <button
          onClick={() => {
            setOpen(!isOpen)
          }}
        >
          HELLO
        </button>
      </div>

      <Sidebar props={navClass} />
    </>
  )
}

export default Header
