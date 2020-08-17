import {handleActions} from 'redux-actions'
import PREFIX from '../../constant/prefix'
import {isIdValidated, isNameValidated} from '../../util/validator'

const INITIAL_STATE = {
  id: '',
  name: ''
}

const REDUCER = {
  updateId (state, action) {
    const input = action.payload
    if (!isIdValidated(input)) {
      return state
    }
    if (state.id === input) {
      return state
    }
    return {
      ...state,
      id: input
    }
  },
  
  updateName (state, action) {
    const input = action.payload
    if (!isNameValidated(input)) {
      return state
    }
    if (state.name === input) {
      return state
    }
    return {
      ...state,
      name: input
    }
  }
}

const OPTION = {prefix: PREFIX.OLD}

export default handleActions(REDUCER, INITIAL_STATE, OPTION)
