import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div className={this.props.view === 'home' ? '' : 'hidden'}>
        <div className="row">
          <SplashWrapper id="splash-wrapper">
            <SplashImage id="splash-image"></SplashImage>
          </SplashWrapper>
          <TitleWrapper>
            <HomeTitle>Daniel Duffield</HomeTitle>
            <HomeSubtitle>Full-Stack Software Developer</HomeSubtitle>
            <TitleRule />
          </TitleWrapper>
        </div>
        <SocialMediaContainer className="row">
          <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4">
            <a href="https://github.com/danielduffield/" target="_blank" rel="noopener noreferrer">
              <SocialMediaButton className="btn btn-default pull-left">Github</SocialMediaButton>
            </a>
            <a href="https://www.linkedin.com/in/daniel-duffield-3ab35b66/" target="_blank" rel="noopener noreferrer">
              <SocialMediaButton className="btn btn-default pull-right">LinkedIn</SocialMediaButton>
            </a>
          </div>
        </SocialMediaContainer>
      </div>
    )
  }
}

const TitleRule = styled.hr`
  width: 600px;
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  position: relative;
  top: 175px;
  text-align: center;
  color: white;
`

const HomeTitle = styled.h3`
  font-size: 4.5em;
`

const HomeSubtitle = styled.span`
  font-size: 2.5em;
`

const SplashImage = styled.div`
  top: 50px;
  height: 550px;
  width: 1855px;
  position: absolute;
  background-image: url("images/splash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  z-index: -1;
`
const SplashWrapper = styled.div`
  position: absolute;
  height: 550px;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`

const SocialMediaContainer = styled.div`
  height: 550px;
  text-align: center;
  z-index: 1;
`

const SocialMediaButton = styled.button`
  top: 200px;
  position: relative;
  width: 35%;
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(Home)
export default Connected
