import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class About extends React.Component {
  render() {
    return (
      <div id="about-section" className={'row' + (this.props.view === 'contact' ? '' : ' hidden')}>
        <ContactSplash></ContactSplash>
        <DarkeningLayer />
      </div>
    )
  }
}

const ContactSplash = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50px;
  background-image: url('images/contact-splash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const DarkeningLayer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(About)
export default Connected
