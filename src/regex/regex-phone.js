// @flow

function regexPhone(): RegExp {
  return new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/)
}

export default regexPhone
