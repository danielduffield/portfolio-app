import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="splash-wrapper">
            <div className="splash-img"></div>
          </div>
        </div>
        <div className="row social-media-btns">
          <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4">
            <a href="https://github.com/danielduffield/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-default social-btn pull-left">Github</button>
            </a>
            <a href="https://www.linkedin.com/in/daniel-duffield-3ab35b66/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-default social-btn pull-right">LinkedIn</button>
            </a>
          </div>
        </div>
        <div className="row demo-projects-container">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="project-demos-container">
              <div className="project-demo">
                <a href="https://www.github.com/danielduffield/trackslash-audio-ripper" target="_blank" rel="noopener noreferrer">
                  <div className="demo-img-wrapper"></div>
                </a>
                <div className="demo-details">
                  <a className="demo-title-link" href="https://www.github.com/danielduffield/trackslash-audio-ripper" target="_blank" rel="noopener noreferrer">
                    <h3 className="demo-title">TrackSlash Audio Ripper</h3>
                  </a>
                  <p className="demo-description">A web app for music fans who want to slice audio from a Youtube video into tracks for download.</p>
                  <div className="demo-sub-description">
                    <p className="demo-lang">
                      <span className="demo-subtitle">Languages: </span> JavaScript, HTML, CSS
                    </p>
                    <p className="demo-tech">
                      <span className="demo-subtitle">Technologies: </span> Node.js, Express.js, Socket.io, Bootstrap, RESTful API, Git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
