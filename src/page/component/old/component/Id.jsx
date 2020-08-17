import React from 'react'
import {connect} from 'react-redux'
import oldAction from '../../../../store/action/old'

const Id = class extends React.PureComponent {
  render () {
    const {id} = this.props
    return (
        <div>
          <span>id: </span>
          <input value={id} onChange={this.#onChange}/>
        </div>
    )
  }
  
  #onChange = e => {
    this.props.onChange(e.target.value)
  }
}

const mapStateToProps = state => {
  return {
    id: state.old.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange (input) {
      dispatch(oldAction.updateId(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Id)

