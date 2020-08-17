import {createActions} from 'redux-actions'
import PREFIX from '../../constant/prefix'
import {makeSimpleActions} from '../util/action'

const action = makeSimpleActions([
  'updateId',
  'updateName',
  'apply'
])

const {old} = createActions({
  [PREFIX.OLD]: Object.assign(action)
})

export default old
