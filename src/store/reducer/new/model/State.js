import Assertion from '../../../../util/Assertion'
import Id from './Id'
import Name from './Name'

const State = class {
  static #PRIVATE = Symbol()
  
  #id
  #name
  
  static new () {
    return this.#of(Id.new(), Name.new())
  }
  
  static #of (id, name) {
    return new State(this.#PRIVATE, id, name)
  }

  constructor (PRIVATE, id, name) {
    Assertion.assertPrivate(PRIVATE, State.#PRIVATE)
    this.#id = Assertion.assertInstanceOf(id, Id)
    this.#name = Assertion.assertInstanceOf(name, Name)
    Object.seal(this)
  }
  
  toJSON () {
    return {
      id: this.#id,
      name: this.#name
    }
  }
  
  updateId (input) {
    const id = this.#id
    if (id.canNotUpdate(input)) {
      return this
    }
    return this.#copy().setId(Id.from(input))
  }
  
  updateName (input) {
    const name = this.#name
    if (name.canNotUpdate(input)) {
      return this
    }
    return this.#copy().setName(Name.from(input))
  }
  
  #copy () {
    return State.#of(this.#id, this.#name)
  }
  
  isValidated () {
    return this.#id.isValidated()
      && this.#name.isValidated()
  }
  
  getId () {
    return this.#id
  }
  
  setId (id) {
    Assertion.assertInstanceOf(id, Id)
    if (this.#id !== id) {
      this.#id = id
    }
    return this
  }
  
  getName () {
    return this.#name
  }
  
  setName (name) {
    Assertion.assertInstanceOf(name, Name)
    if (this.#name !== name) {
      this.#name = name
    }
    return this
  }
}

export default State