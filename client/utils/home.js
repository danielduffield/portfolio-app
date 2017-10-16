import React from 'react'

const projects = [
  {
    name: 'TrackSlash Audio Ripper',
    url: 'https://www.github.com/danielduffield/trackslash-audio-ripper',
    repo: 'https://www.github.com/danielduffield/trackslash-audio-ripper',
    description: 'A web app for music fans who want to slice audio from a Youtube video into tracks for download.',
    languages: 'JavaScript, HTML, CSS',
    tech: 'Node.js, Express.js, Socket.io, Bootstrap, RESTful API, Git',
    image: 'images/trackslash-demo-image.png'
  }
]

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
              {projects.map((project, index) => {
                return (
                  <div key={index} className="project-demo">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="demo-img-wrapper"></div>
                    </a>
                    <div className="demo-details">
                      <a className="demo-title-link" href={project.url} target="_blank" rel="noopener noreferrer">
                        <h3 className="demo-title">{project.name}</h3>
                      </a>
                      <p className="demo-description">{project.description}</p>
                      <div className="demo-sub-description">
                        <p className="demo-lang">
                          <span className="demo-subtitle">Languages: </span> {project.languages}
                        </p>
                        <p className="demo-tech">
                          <span className="demo-subtitle">Technologies: </span> {project.tech}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
