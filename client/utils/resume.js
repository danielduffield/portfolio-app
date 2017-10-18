import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Resume extends React.Component {
  render() {
    return (
      <div className={'row' + (this.props.view === 'resume' ? '' : ' hidden')}>
        <ResumeWrapper>
          <ResumeImage></ResumeImage>
        </ResumeWrapper>
      </div>
    )
  }
}

const ResumeWrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 50px;
  position: fixed;
  overflow-y: scroll;
  background-image: url('images/resume-splash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  z-index: 0;
`

const ResumeImage = styled.div`
  position: relative;
  height: 956px;
  width: 809px;
  border: 1px solid grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('images/resume-image.png');
  margin: 75px auto 50px;
  z-index: 10;
`

function mapStateToProps(state) {
  console.log('STATE: ', state)
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(Resume)
export default Connected
