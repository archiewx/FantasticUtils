import { getTypes } from '../../src/base/native-types'

it('对象类型', () => {
  expect(getTypes('zhangsn')).toEqual('String')
  expect(getTypes([])).toEqual('Array')
  expect(getTypes({})).toEqual('Object')
  expect(getTypes(1)).toEqual('Number')
  expect(getTypes(true)).toEqual('Boolean')
  expect(getTypes(() => {})).toEqual('Function')
})
