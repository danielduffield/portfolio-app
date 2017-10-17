import { createStore } from 'redux'

function reducer(state = {
  view: 'home'
}, action) {
  switch (action.type) {
    case 'UPDATED_VIEW':
      return Object.assign({}, state, { view: action.payload.text })
  }
}

export default createStore(reducer)
