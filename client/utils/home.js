import React from 'react'

import ProjectsPreview from './projects-preview'

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
        <ProjectsPreview/>
      </div>
    )
  }
}
