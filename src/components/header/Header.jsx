import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowDropDown, MdInvertColors } from 'react-icons/md'
import { Myphoto } from '../../assets/images'
import { Hletter } from '../../assets/images'
import Blast from '../BlastAnimation/Blast'
import Logo from '../logoAnimation/Logo'
import './header.scss'
import { useGLobalContext } from '../../hooks/contextAPI'
import Wobble from 'react-reveal/Fade'
const nameArray = [' a', 'r', 's', 'h', 'i', 't', ' ']
const jobArray = [
  'W',
  'e',
  'b',
  '',
  'D',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
]

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const {
    colorTheme
  } = useGLobalContext()

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <div className="container">
            <div className="leftSide">
          <h1 arial-label="Hi i'm Abdullahi, web Junior full-stack developer">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span> {''}
            <Wobble bottom>
            <img className='hLetter' style={{filter: colorTheme=='dark-mode'?'invert(1)' : 'invert(0)'}} src={Hletter}/>

            </Wobble>
          
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">WEB DEVELOPER / UI/UX DESIGNER</p>
          <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
          </div>   
          <div className='signatureContainer' >
          <img className='signatureLogo' src={Myphoto}/>
          </div>
          </div> 
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  )
}

export default Header
