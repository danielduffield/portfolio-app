import React from 'react'
import styled from 'styled-components'
import projects from './projects-data'

export default class ProjectsPreview extends React.Component {
  render() {
    return (
      <div>
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
  position: relative;
`

const DemoTitle = styled.h3`
  font-size: 1.75em;
  text-decoration: none;
  color: black;
`

const DemoSubDescription = styled.div`
  position: absolute;
  bottom: 0;
`

const DemoSubtitle = styled.span`
  font-size: 1.25em;
  margin-right: 10px;
`