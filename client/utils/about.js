import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
  render() {
    return (
      <div className={'row' + (this.props.view === 'about' ? '' : ' hidden')}>
        <div>About</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(About)
export default Connected
