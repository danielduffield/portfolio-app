import React from 'react'
import { connect } from 'react-redux'

import NavBar from './nav-bar.js'
import Home from './home.js'
import About from './about.js'
import Resume from './resume.js'
import ProjectsPreview from './projects-preview.js'
import Contact from './contact.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.updateView = this.updateView.bind(this)
  }
  updateView(view) {
    this.props.dispatch({
      type: 'UPDATED_VIEW',
      payload: { text: view }
    })
  }
  componentDidMount() {
    const hash = window.location.hash.replace('#', '')
    const views = ['about', 'contact', 'home', 'projects', 'resume']
    let updated = false
    views.forEach(view => {
      if (updated) return
      if (view === hash) {
        this.updateView(view)
        updated = true
      }
    })
    if (!updated) window.location.hash = '#'
  }
  render() {
    return (
      <div id="app-container">
        <NavBar />
        <Home />
        <About />
        <Resume />
        <ProjectsPreview />
        <Contact />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(App)
export default Connected
