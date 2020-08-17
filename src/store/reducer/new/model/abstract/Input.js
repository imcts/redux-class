import Assertion from '../../../../../util/Assertion'

const Input = class {
  #input
  
  constructor (input) {
    this.#input = Assertion.assertString(input)
  }
  
  toJSON () {
    return {
      value: this.#input
    }
  }
  
  isValidated () {
    return this.#isNotEmpty() && this._isValidated(this.#input)
  }
  
  #isNotEmpty () {
    return !!this.#input
  }
  
  _isValidated (input) {
    Assertion.assertOverride()
  }
  
  canNotUpdate (input) {
    return this.#input === input || !this._isValidated(input)
  }

  getValue () {
    return this.#input
  }
}

export default Input
