import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const stringsToSplit = {
    firstLetter: 'H',
    welcomeMessage: 'ey there!',
    introMessage: `I'm...`,
    name: 'Eric',
    job: 'A...Software Engineer',
  }
  const indexShift = 10
  const firstLetterArray = stringsToSplit['firstLetter'].split('')
  const welcomeMessageArray = stringsToSplit['welcomeMessage'].split('')
  const introMessageArray = stringsToSplit['introMessage'].split('')

  const nameArray = stringsToSplit['name'].split('')
  const jobArray = stringsToSplit['job'].split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={firstLetterArray}
            index={0}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={welcomeMessageArray}
            index={indexShift}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={introMessageArray}
            index={indexShift + welcomeMessageArray.length}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={
              indexShift + welcomeMessageArray.length + introMessageArray.length
            }
          />
          {/*<img src={} alt="developer" />*/}
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={
              indexShift +
              welcomeMessageArray.length +
              introMessageArray.length +
              nameArray.length
            }
          />
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
