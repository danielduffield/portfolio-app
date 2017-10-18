import React from 'react'

import NavBar from './nav-bar.js'
import Home from './home.js'
import Resume from './resume.js'
import ProjectsPreview from './projects-preview.js'

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Resume />
      <ProjectsPreview />
    </div>
  )
}
