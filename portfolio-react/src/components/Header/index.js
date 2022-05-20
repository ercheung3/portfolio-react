import LogoNoBgBlk from '../../assets/images/logo-nobg-black.png'
import LogoNoBgWht from '../../assets/images/logo-nobg-white.png'
import LogoBgBlk from '../../assets/images/logo-bg-black.png'
import LogoBgWht from '../../assets/images/logo-bg-white.png'
import LogoSubtitle from '../../assets/images/logo-subtitle-black-montserrat.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Header = () => {
  return (
    <>
      <div>
        <Link className="logo" to="/">
          <img src={LogoBgBlk} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="eric" />
        </Link>
      </div>
    </>
  )
}

export default Header
