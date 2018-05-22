// @flow

let result = ''
function recursion(data: Array<{}>, id): number | {} | string {
  id = id || 'id'
  // cityData数据为空的时候直接返回
  if (!data || !data.length) return -1
  // 常规循环cityData
  for (let i = 0, len = data.length; i < len; i += 1) {
    const childs = data[i].children
    // 如果匹配到id的话，就是我们要的结果
    if (data[i].id === id) {
      result = data[i]
    }
    // 如果还有子节点，执行递归
    if (childs && childs.length > 0) {
      recursion(childs, id)
    }
  }
  return result
}

const deep = (cityData, id) => {
  // 没有数据直接返回
  if (!cityData || !cityData.length) return
  // 先定义一个数据栈
  let stack: mixed[] = []
  let item: {} = {}

  //先将第一层节点放入数据栈
  for (var i = 0, len = cityData.length; i < len; i++) {
    stack.push(cityData[i])
  }
  // 循环
  while (stack.length) {
    item = stack.shift()
    if (item.id === id) {
      result = item.name
    }
    //如果该节点有子节点，继续添加进入栈顶
    if (item.children && item.children.length) {
      // 注意这里调换了顺序
      stack = item.children.concat(stack)
    }
  }
  return result
}

const range = (cityData, id) => {
  if (!cityData || !cityData.length) return
  // 定义一个数据栈
  let stack = []

  let item = null

  //先将第一层节点放入栈
  for (var i = 0, len = cityData.length; i < len; i++) {
    stack.push(cityData[i])
  }

  while (stack.length) {
    // 将数据栈的第一个取出来
    item = stack.shift()
    // 如果符合就赋值给result
    if (item.id === id) {
      result = item.name
    }
    //如果该节点有子节点，继续添加进入栈底
    if (item.children && item.children.length) {
      stack = stack.concat(item.children)
    }
  }
  return result
}

function findBy(option: {
  data: Array<{ id?: string, children: Array<{ id?: string, children: Array<{}> }> }>,
  field?: string
}): number | {} | string {
  option = {
    ...option,
    filed: option.field || 'id'
  }
  // 递归实现
  return recursion(option.data, option.field)
}

export default findBy
