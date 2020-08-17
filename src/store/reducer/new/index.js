import {handleActions} from 'redux-actions'
import PREFIX from '../../constant/prefix'
import State from './model/State'

const INITIAL_STATE = State.new()

const REDUCER = {
  updateId (state, action) {
    return state.updateId(action.payload)
  },
  
  updateName (state, action) {
    return state.updateName(action.payload)
  }
}

const OPTION = {prefix: PREFIX.NEW}

export default handleActions(REDUCER, INITIAL_STATE, OPTION)
