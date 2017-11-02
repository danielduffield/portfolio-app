import React from 'react'
import { connect } from 'react-redux'

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={this.props.view === 'error' ? '' : 'hidden'}>
        <h3>ERROR</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

const Connected = connect(mapStateToProps)(ErrorPage)
export default Connected
