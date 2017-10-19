import { createStore } from 'redux'

function reducer(state = {
  view: 'home'
}, action) {
  switch (action.type) {
    case 'UPDATED_VIEW':
      return Object.assign({}, state, { view: action.payload.text })
    case 'HASH_CHANGED':
      const parsed = parseHash(action.payload.hash)
      return Object.assign({}, state, { view: (parsed || state.view) })
    default:
      return state
  }
}

function parseHash(url) {
  let parsed = ''
  const views = ['home', 'resume', 'projects', 'contact', 'about']
  views.forEach(view => {
    if (view === url) {
      parsed = view
    }
  })
  return parsed || 'home'
}

export default createStore(reducer)
