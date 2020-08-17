import {put, select, takeLatest} from 'redux-saga/effects'
import oldAction from '../../action/old'
import {canIdSubmit, canNameSubmit} from '../../util/validator'

function * apply () {
  const id = yield select(state => state.old.id)
  const name = yield select(state => state.old.name)
  if (!(canIdSubmit(id) && canNameSubmit(name))) {
    return
  }
  console.log('Do applying !')
}

export default function * () {
  yield takeLatest(oldAction.apply, apply)
}
