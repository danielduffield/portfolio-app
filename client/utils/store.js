import { createStore } from 'redux'

function reducer(state = {
  view: 'home',
  contact: {
    input: '',
    selected: ''
  }
}, action) {
  switch (action.type) {
    case 'UPDATED_VIEW':
      return Object.assign({}, state, { view: action.payload.text })
    case 'HASH_CHANGED':
      const parsed = parseHash(action.payload.hash)
      return Object.assign({}, state,
        {
          view: (parsed || state.view),
          contact: {
            input: '',
            selected: ''
          }
        })
    case 'TOGGLED_CONTACT_SUGGESTION':
      const input = suggestInput(action.payload.selected)
      return Object.assign({}, state, { contact:
        {
          input,
          selected: action.payload.selected
        }
      })
    case 'UPDATED_CONTACT_INPUT':
      return Object.assign({}, state, { contact:
        {
          input: action.payload.text,
          selected: ''
        }
      })
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
  return parsed || 'error'
}

function suggestInput(selected) {
  switch (selected) {
    case 'questions':
      return 'I have a question with regards to '
    case 'feedback':
      return 'I\'d like to offer some feedback regarding '
    case 'job':
      return 'I have an employment opportunity that you may be interested in.'
    default:
      return ''
  }
}

export default createStore(reducer)
