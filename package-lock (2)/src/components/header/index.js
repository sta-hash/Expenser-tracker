import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header logo">xpenser
        </div>
        <div className="header-button">
          <a href="http://github.com" target="blank" rel="noopener noreferrer">
            <i className="devicon-github-original"></i>star
          </a>
        </div>
      </div>

    </div>
  )
}

export default Header;
