import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleWare from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(saga)

export default store
