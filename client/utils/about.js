import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class About extends React.Component {
  render() {
    return (
      <div className={'row' + (this.props.view === 'about' ? '' : ' hidden')}>
        <AboutSplash></AboutSplash>
        <DarkeningLayer />
        <AboutWrapper className="col-sm-8 col-sm-offset-2">
          <AboutTitleContainer>
            <AboutTitle>About</AboutTitle>
          </AboutTitleContainer>
        </AboutWrapper>
      </div>
    )
  }
}

const AboutSplash = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50px;
  background-image: url('images/about-splash.jpg');
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

const AboutWrapper = styled.div`
  background-color: aqua;
  position: relative;
  top: 50px;
  height: 550px;
  padding: 0;
`

const AboutTitleContainer = styled.div`
  text-align: center;
`

const AboutTitle = styled.h3`
  font-size: 2.5em;
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(About)
export default Connected
