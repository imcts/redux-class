import React from 'react'
import {connect} from 'react-redux'
import newAction from '../../../../store/action/new'

const Id = class extends React.PureComponent {
  render () {
    const {id} = this.props
    const value = id.getValue()
    return (
        <div>
          <span>id: </span>
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
    id: state.newOne.getId()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange (input) {
      dispatch(newAction.updateId(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Id)

