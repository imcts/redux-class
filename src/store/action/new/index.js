import {createActions} from 'redux-actions'
import PREFIX from '../../constant/prefix'
import {makeSimpleActions} from '../util/action'

const action = makeSimpleActions([
  'updateId',
  'updateName',
  'apply'
])

const actions = createActions({
  [PREFIX.NEW]: Object.assign(action)
})

export default actions.new
