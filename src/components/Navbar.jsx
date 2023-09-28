import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <ul>
                <li>
                    <a className='home-btn' href="/">
                        <img className='home-img' src={require('../assets/marvel-logo.png')} alt="Marvel Logo" />
                    </a>
                </li>
                {/*<li>
                    <a href="about">About</a>
                </li>*/}
            </ul>
        </nav>    
    </header>
  )
}
