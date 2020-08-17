import {all} from 'redux-saga/effects'
import old from './old'
import newOne from './new'

export default function * () {
  yield all([
    old(),
    newOne()
  ])
}
