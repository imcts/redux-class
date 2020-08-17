import React from 'react'
import {connect} from 'react-redux'
import newAction from '../../../../store/action/new'

const Name = class extends React.PureComponent {
  render () {
    const {name} = this.props
    const value = name.getValue()
    return (
      <div>
        <span>name: </span>
        <input value={value} onChange={this.#onChange}/>
      </div>
    )
  }
  
  #onChange = e => {
    this.props.onChange(e.target.value)
  }
}

const mapStateToProps = state => {
  return {
    name: state.newOne.getName()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange (input) {
      dispatch(newAction.updateName(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)

