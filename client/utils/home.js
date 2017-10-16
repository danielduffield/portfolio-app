import React from 'react'
import styled from 'styled-components'

const projects = [
  {
    name: 'ConCanvas',
    url: 'https://con-canvas.herokuapp.com',
    repo: 'https://www.github.com/danielduffield/concanvas',
    description: 'An app for artists who want to draw collaboratively on a shared canvas.',
    languages: 'JavaScript, HTML, CSS',
    tech: 'Node.js, Express.js, React, Redux, React-Redux, Socket.io, Canvas, Git',
    image: 'images/concanvas-demo-image.png'
  },
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
                  <ProjectDemo key={index}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ProjectImage url={project.image}></ProjectImage>
                    </a>
                    <DemoDetails>
                      <a className="demo-title-link" href={project.url} target="_blank" rel="noopener noreferrer">
                        <DemoTitle>{project.name}</DemoTitle>
                      </a>
                      <p>{project.description}</p>
                      <DemoSubDescription>
                        <p>
                          <DemoSubtitle>Languages: </DemoSubtitle> {project.languages}
                        </p>
                        <p>
                          <DemoSubtitle>Technologies: </DemoSubtitle> {project.tech}
                        </p>
                      </DemoSubDescription>
                    </DemoDetails>
                  </ProjectDemo>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ProjectDemo = styled.div`
  margin: 30px 0;
  padding: 25px;
  height: 300px;
  position: relative;
`

const ProjectImage = styled.div`
  background-image: url(${props => props.url});
  float: left;
  height: 250px;
  width: 400px;
  border: 1px solid dimgrey;
  background-color: dimgrey;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const DemoDetails = styled.div`
  font-size: 1.15em;
  float: left;
  padding: 0 25px;
  height: 250px;
`

const DemoTitle = styled.h3`
  font-size: 1.75em;
  text-decoration: none;
  color: black;
`

const DemoSubDescription = styled.div`
  position: absolute;
  bottom: 80px;
`

const DemoSubtitle = styled.span`
  font-size: 1.25em;
  margin-right: 10px;
`
