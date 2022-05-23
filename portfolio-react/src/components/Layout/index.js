import './index.scss'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
