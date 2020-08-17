import React from 'react'
import {connect} from 'react-redux'
import oldAction from '../../../../store/action/old'
import {canIdSubmit, canNameSubmit} from '../../../../store/util/validator'

const Submit = class extends React.PureComponent {
  static #COLOR_OF_RED = 'red'
  static #COLOR_OF_BLUE = 'blue'
  
  render () {
    const {id, name} = this.props
    const color = this.#getColor(id, name)
    return <button style={{color}} onClick={this.#onClick}>회원가입</button>
  }
  
  #getColor (id, name) {
    if (canIdSubmit(id) && canNameSubmit(name)) {
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
    id: state.old.id,
    name: state.old.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick () {
      dispatch(oldAction.apply())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit)

