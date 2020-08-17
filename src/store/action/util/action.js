const pass = v => v

export const makeSimpleActions = actions => {
  if (!(actions instanceof Array)) {
    return {}
  }
  return actions.reduce((accumulator, action) => {
    accumulator[action] = pass
    return accumulator
  }, {})
}