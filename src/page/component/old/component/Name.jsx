import React from 'react'
import {connect} from 'react-redux'
import oldAction from '../../../../store/action/old'

const Name = class extends React.PureComponent {
  render () {
    const {name} = this.props
    return (
      <div>
        <span>name: </span>
        <input value={name} onChange={this.#onChange}/>
      </div>
    )
  }
  
  #onChange = e => {
    this.props.onChange(e.target.value)
  }
}

const mapStateToProps = state => {
  return {
    name: state.old.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange (input) {
      dispatch(oldAction.updateName(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)

