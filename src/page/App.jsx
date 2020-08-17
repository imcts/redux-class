import React from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Old from './component/old/Old'
import New from './component/new/New'

const App = class extends React.PureComponent {
  render () {
    return (
      <Provider store={store}>
        {/*<Old/>*/}
        <New/>
      </Provider>
    )
  }
}

export default App

