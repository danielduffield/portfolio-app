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
          <AboutImage></AboutImage>
          <AboutDetails>
            <AboutDescription>
              <p>All work and no play makes Daniel a good programmer. All work and no play makes Daniel a good programmer.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AboutDescription>
          </AboutDetails>
        </AboutWrapper>
      </div>
    )
  }
}

const AboutDetails = styled.span`
  padding: 50px 50px 50px 0;
  float: left;
  font-size: 1.5em;
`

const AboutDescription = styled.div`
  width: 100% - 400px;
  padding-right: 50px;
  height: 100%;
  position: absolute;
`

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
  background-color: rgba(250, 250, 250, 0.9);
  position: relative;
  top: 100px;
  height: 500px;
  padding: 0;
`

const AboutTitleContainer = styled.div`
  height: 100px;
  text-align: center;
`

const AboutTitle = styled.span`
  line-height: 100px;
  font-size: 2.5em;
`

const AboutImage = styled.div`
  height: 300px;
  width: 300px;
  background-color: palegoldenrod;
  margin: 50px;
  background-image: url('images/DD-3.jpg');
  background-size: cover;
  display: inline-block;
  float: left;
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(About)
export default Connected
