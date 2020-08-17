const ID_REG_EXP = /^[0-9a-zA-Z]{0,15}$/
const NAME_REG_EXP = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{0,10}$/

const isNotEmpty = input => !!input
export const isIdValidated = id => ID_REG_EXP.test(id)
export const isNameValidated = name => NAME_REG_EXP.test(name)
export const canIdSubmit = id => isNotEmpty(id) && isIdValidated(id)
export const canNameSubmit = name => isNotEmpty(name) && isNameValidated(name)
