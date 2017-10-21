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
          <AboutImage></AboutImage>
          <AboutDetails>
            <AboutDescription>
              <p>{'My name is Daniel Duffield, and I’m a full-stack JavaScript developer with a passion for solving logical puzzles in the shape of building, refactoring, and debugging software.'}</p>
              <p>{'In the development of my personal projects, I\'ve accomplished the following:'}</p>
              <AboutPoints>
                <li>Wielded vanilla.JS, Es6 syntax and features, and CommonJS modular code structure.</li>
                <li>Leveraged frameworks and libraries such as React paired with Redux.</li>
                <li>Managed databases using SQL, Postgres, and Knex.</li>
                <li>Implemented testing using Mocha and Chai, using nyc for code coverage reports.</li>
                <li>Studied and applied techniques of functional, object-oriented, and procedural programming.</li>
                <li>Maintained code version control using Git with consistent deployment to Github.</li>
              </AboutPoints>
              <p>If you have any questions, feedback, or information regarding an employment opportunity, please feel free to reach out to me on LinkedIn or via email at .</p>
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
  font-size: 1.15em;
`

const AboutPoints = styled.ul`
  position: relative;
  left: 25px;
  padding-right: 25px;
`

const AboutDescription = styled.div`
  width: 100% - 400px;
  padding-right: 50px;
  padding-top: 10px;
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
  top: 200px;
  height: 400px;
  padding: 0;
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
