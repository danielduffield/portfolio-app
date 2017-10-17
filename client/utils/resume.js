import React from 'react'
import styled from 'styled-components'

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <ResumeImage></ResumeImage>
      </div>
    )
  }
}

const ResumeImage = styled.div`
  height: 956px;
  width: 809px;
  border: 1px solid grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('images/resume-image.png');
  margin: 0 auto;
`
