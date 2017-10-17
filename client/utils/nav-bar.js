import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="full-col">
          <div id="nav-bar">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 nav-button-container">
              <span className="nav-link-container pull-left">
                <span id="owner-name">Daniel Duffield</span>
              </span>
              <span className="nav-link-container">
                <a className="nav-link" href="#about">About</a>
              </span>
              <span className="nav-link-container">
                <a className="nav-link" href="#resume">Resume</a>
              </span>
              <span className="nav-link-container">
                <a className="nav-link" href="#projects">Projects</a>
              </span>
              <span className="nav-link-container">
                <a className="nav-link" href="#contact">Contact</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
