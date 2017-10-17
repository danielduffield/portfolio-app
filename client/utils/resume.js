import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Resume extends React.Component {
  render() {
    return (
      <div className={this.props.view === 'resume' ? '' : 'hidden'}>
        <ResumeImage></ResumeImage>
      </div>
    )
  }
}

const ResumeImage = styled.div`
  position: relative;
  height: 956px;
  width: 809px;
  border: 1px solid grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('images/resume-image.png');
  margin: 75px auto 50px;
`

function mapStateToProps(state) {
  console.log('STATE: ', state)
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(Resume)
export default Connected
