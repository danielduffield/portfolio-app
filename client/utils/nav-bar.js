import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="full-col">
          <NavBarContainer>
            <NavButtonContainer className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <NavLinkContainer className="pull-left">
                <OwnerName>
                  <NavLink className="nav-link" href="#home"
                    data-view="home">Home</NavLink>
                </OwnerName>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#contact">Contact</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#resume"
                  data-view="resume">Resume</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#projects"
                  data-view="projects">Projects</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#about">About</NavLink>
              </NavLinkContainer>
            </NavButtonContainer>
          </NavBarContainer>
        </div>
      </div>
    )
  }
}

const NavBarContainer = styled.div`
  background-color: whitesmoke;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid lightgrey;
`

const NavLinkContainer = styled.span`
  line-height: 50px;
  float: right;
  font-size: 1.25em;
  margin: 0 20px;
`

const NavButtonContainer = styled.div`
  position: fixed;
  height: 50px;
`

const NavLink = styled.a`
  text-decoration: none;
  color: black;
`

const OwnerName = styled.span`
  font-size: 1.25em;
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(NavBar)
export default Connected
