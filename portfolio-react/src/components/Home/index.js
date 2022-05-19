import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hey There! <br /> I'm Eric
          {/*<img src={} alt="developer" />*/}
          <br />
          Software Engineer
        </h1>
        <h2>Web Developer / Bioinformatician</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
