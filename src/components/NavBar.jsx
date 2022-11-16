import { useLocation, Link, useState } from 'react-router-dom'
import kalpabriksha from '../Pictures/kalpabriksha.png';
import '../NavBar.css'





const NavBar = () => {
  const location = useLocation()
  let activeHome = false
  let activeMain = false
  let activeAbout = false
  let activeFiskies = false
  let activeFaq = false
  let activeCont = false

  if (location.pathname === '/') {
    activeHome = true
  }
  if (location.pathname === '/main') {
    activeMain = true
  }
  if (location.pathname === '/about') {
    activeAbout = true
  }
  if (location.pathname === '/fiskies') {
    activeFiskies = true
  }
  if (location.pathname === '/Faq') {
    activeFaq = true
  }
  if (location.pathname === '/contactUs') {
    activeCont = true
  }
    return (
        <>
            <nav className="bar-nav">
                <div className="img-container">
                    <Link to="/"><img className="img" src={kalpabriksha} height="200" width="200" alt="" /></Link>
                    <h1 className="gradient shimmer"><Link to="/"><b>KALPABRIKSHA</b></Link></h1>
                    <p className="gradient shimmer"><b>Where Dreams Blossom!</b></p>
                </div>

                <div className="nav-list">
                    <Link to="/Home" className={activeHome ? 'active item' : 'item'} >HOME</Link>
                    <Link to="/About" className={activeAbout ? 'active item' : 'item'}>ABOUT US</Link>
                    <Link to="/Posts" className={activeMain ? 'active item' : 'item'}>POSTS</Link>
                    <Link to="/Advice" className={activeFiskies ? 'active item' : 'item'} >SOME ADVICE</Link>
                    <Link to="/FAQs" className={activeFaq ? 'active item' : 'item'}>FAQs</Link>
                    <Link to="/Contact" className={activeCont ? 'active item' : 'item'}>CONTACT US</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
