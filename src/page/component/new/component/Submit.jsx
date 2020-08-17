import React from 'react'
import {connect} from 'react-redux'
import newAction from '../../../../store/action/new'

const Submit = class extends React.PureComponent {
  static #COLOR_OF_RED = 'red'
  static #COLOR_OF_BLUE = 'blue'
  
  render () {
    const {state} = this.props
    const color = this.#getColor(state)
    return <button style={{color}} onClick={this.#onClick}>회원가입</button>
  }
  
  #getColor (state) {
    if (state.isValidated()) {
      return Submit.#COLOR_OF_BLUE
    }
    return Submit.#COLOR_OF_RED
  }
  
  #onClick = () => {
    this.props.onClick()
  }
}

const mapStateToProps = state => {
  return {
    state: state.newOne
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick () {
      dispatch(newAction.apply())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit)

