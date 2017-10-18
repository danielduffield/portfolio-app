import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Resume extends React.Component {
  render() {
    return (
      <div className={'row' + (this.props.view === 'resume' ? '' : ' hidden')}>
        <ResumeSplash className="col-sm-12"></ResumeSplash>
        <DarkeningLayer />
        <ResumeImage />
      </div>
    )
  }
}

const ResumeSplash = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50px;
  background-image: url('images/resume-splash.jpg');
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

const ResumeImage = styled.div`
  position: relative;
  top: 50px;
  height: 956px;
  width: 809px;
  border: 2px solid grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('images/resume-image.png');
  margin: 50px auto;
`

function mapStateToProps(state) {
  console.log('STATE: ', state)
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(Resume)
export default Connected
