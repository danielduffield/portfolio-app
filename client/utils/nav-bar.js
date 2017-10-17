import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.updateView = this.updateView.bind(this)
  }
  updateView(event) {
    this.props.dispatch({
      type: 'UPDATED_VIEW',
      payload: {
        text: event.target.dataset.view
      }
    })
  }
  render() {
    return (
      <div className="row">
        <div className="full-col">
          <NavBarContainer>
            <NavButtonContainer className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <NavLinkContainer className="pull-left">
                <OwnerName>Daniel Duffield</OwnerName>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#about">About</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#resume"
                  onClick={this.updateView} data-view="resume">Resume</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#projects">Projects</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink className="nav-link" href="#contact">Contact</NavLink>
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
  font-size: 1.5em;
`

function mapStateToProps(state) {
  console.log('STATE: ', state)
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(NavBar)
export default Connected
