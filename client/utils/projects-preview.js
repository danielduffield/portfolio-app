import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import projects from './projects-data'

class ProjectsPreview extends React.Component {
  render() {
    return (
      <div className={this.props.view === 'home' || this.props.view === 'projects' ? '' : 'hidden'}>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <HeadingWrapper>
              <ProjectsTitle>Projects</ProjectsTitle>
              <TitleRule />
            </HeadingWrapper>
            <ProjectDemosContainer>
              {projects.map((project, index) => {
                return (
                  <ProjectDemo key={index} bgColor={index % 2 !== 0 ? '#3b3a36' : 'white'} color={index % 2 !== 0 ? 'white' : 'currentcolor'}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ProjectImage url={project.image} className={index % 2 !== 0 ? 'pull-right' : ''}></ProjectImage>
                    </a>
                    <DetailsWrapper>
                      <DemoDetails>
                        <a className="demo-title-link" href={project.url} target="_blank" rel="noopener noreferrer">
                          <DemoTitle color={index % 2 !== 0 ? 'white' : 'black'}>{project.name}</DemoTitle>
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
                    </DetailsWrapper>
                  </ProjectDemo>
                )
              })}
            </ProjectDemosContainer>
          </div>
        </div>
      </div>
    )
  }
}

const DetailsWrapper = styled.div`
  width: 60%;
  float: left;
`

const TitleRule = styled.hr`
  width: 300px;
  margin: 0 auto;
  border-color: black;
`

const HeadingWrapper = styled.div`
  text-align: center;
  top: 50px;
  position: relative;
`

const ProjectsTitle = styled.h3`
  font-size: 3em;
`

const ProjectDemosContainer = styled.div`
  margin-top: 75px;
`

const ProjectDemo = styled.div`
  margin: 30px 0;
  padding: 25px;
  height: 300px;
  border: 2px solid #e9ece5;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
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
  color: ${props => props.color};
`

const DemoSubDescription = styled.div`
  position: absolute;
  bottom: 0;
`

const DemoSubtitle = styled.span`
  font-size: 1.25em;
  margin-right: 10px;
`

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(ProjectsPreview)
export default Connected
