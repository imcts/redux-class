import {select, takeLatest} from 'redux-saga/effects'
import newAction from '../../action/new'

function * apply () {
  const state = yield select(state => state.newOne)
  if (!state.isValidated()) {
    return
  }
  console.log('Do applying !')
}

export default function * () {
  yield takeLatest(newAction.apply, apply)
}
