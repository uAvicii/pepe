// {
//   // 定义一个函数，用于把牌堆顶n张牌移动到末尾
//   function moveCardBack(n, arr) {
//     // 循环n次，把队列第一张牌放到队列末尾
//     for (let i = 0; i < n; i++) {
//       const moveCard = arr.shift() // 弹出队头元素，即第一张牌
//       arr.push(moveCard) // 把原队头元素插入到序列末尾
//     }
//     return arr
//   }

//   // 定义一个函数，用于把牌堆顶n张牌移动到中间的任意位置
//   function moveCardMiddleRandom(n, arr) {
//     // 插入在arr中的的位置，随机生成一个idx
//     // 这个位置必须是在n+1到arr.length-1之间
//     const idx = Math.floor(Math.random() * (arr.length - n - 1)) + n + 1
//     // 执行插入操作
//     const newArr = arr.slice(n, idx).concat(arr.slice(0, n)).concat(arr.slice(idx))
//     return newArr
//   }

//   // 步骤1：初始化8张牌，假设为"ABCDABCD"
//   let arr = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']
//   console.log('步骤1：拿出4张牌，对折撕成8张，按顺序叠放。')
//   console.log('此时序列为：' + arr.join('') + '\n---')

//   // 步骤2（无关步骤）：名字长度随机选取，这里取2到5（其实任意整数都行）
//   const nameLen = Math.floor(Math.random() * 4) + 2
//   // 把nameLen张牌移动到序列末尾
//   arr = moveCardBack(nameLen, arr)
//   console.log(`步骤2：随机选取名字长度为${nameLen}，把第1张牌放到末尾，操作${nameLen}次。`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤3（关键步骤）：把牌堆顶三张放到中间任意位置
//   arr = moveCardMiddleRandom(3, arr)
//   console.log(`步骤3：把牌堆顶3张放到中间的随机位置。`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤4（关键步骤）：把最顶上的牌拿走
//   const restCard = arr.shift() // 弹出队头元素
//   console.log(`步骤4：把最顶上的牌拿走，放在一边。`)
//   console.log(`拿走的牌为：${restCard}`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤5（无关步骤）：根据南方人/北方人/不确定，把顶上的1/2/3张牌插入到中间任意位置
//   // 随机选择1、2、3中的任意一个数字
//   const moveNum = Math.floor(Math.random() * 3) + 1
//   arr = moveCardMiddleRandom(moveNum, arr)
//   console.log(`步骤5：我${
//     moveNum === 1 ? '是南方人' : moveNum === 2 ? '是北方人' : '不确定自己是哪里人'
//   }，\把${moveNum}张牌插入到中间的随机位置。`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤6（关键步骤）：根据性别男或女，移除牌堆顶的1或2张牌
//   const maleNum = Math.floor(Math.random() * 2) + 1 // 随机选择1或2
//   for (let i = 0; i < maleNum; i++) {
//     // 循环maleNum次，移除牌堆顶的牌
//     arr.shift()
//   }
//   console.log(`步骤6：我是${maleNum === 1 ? '男' : '女'}生，移除牌堆顶的${maleNum}张牌。`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤7（关键步骤）：把顶部的牌移动到末尾，执行7次
//   arr = moveCardBack(7, arr)
//   console.log(`步骤7：把顶部的牌移动到末尾，执行7次`)
//   console.log(`此时序列为：${arr.join('')}\n---`)

//   // 步骤8（关键步骤）：执行约瑟夫环过程。把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。
//   console.log(`步骤8：把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。`)
//   while (arr.length > 1) {
//     const luck = arr.shift() // 好运留下来
//     arr.push(luck)
//     console.log(`好运留下来：${luck}\t\t此时序列为：${arr.join('')}`)
//     const sadness = arr.shift() // 烦恼都丢掉
//     console.log(`烦恼都丢掉：${sadness}\t\t此时序列为：${arr.join('')}`)
//   }
//   console.log(`---\n最终结果：剩下的牌为${arr[0]}，步骤4中留下来的牌也是${restCard}`)
// }

function toCamelCase(str) {
  return str
    .replace(/[-_]+/g, ' ') // replace all dashes and underscores with spaces
    .replace(/\s[a-z]/g, function (g) {
      return g[1].toUpperCase()
    }) // make the character after the space upper case
    .replace(/\s/g, '') // remove spaces
    .replace(/^[a-z]/, function (g) {
      return g.toUpperCase()
    }) // make the first character upper case
}
console.log('驼峰\n', toCamelCase('the-stealth-warrior')) // returns "theStealthWarrior"

// 数组扁平化
function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
}
let arrs = [1, [2], [3, [[4]]]]
console.log('扁平化数组\n', flatten(arrs)) // [1, 2, 3, 4]

// 闭包
function outerFunction() {
  const outerVar = 'I am outside!'

  function innerFunction() {
    const innerVar = 'I am inside!'
    console.log(outerVar) // 可以访问外部函数的变量
  }

  return innerFunction
}
const myInnerFunc = outerFunction()
myInnerFunc() // 输出: 'I am outside!'

// 手写reduce函数
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
}
const arrs1 = [1, 2, 3, 4, 5]
const sum = arrs1.myReduce((acc, val) => acc + val, 0)
console.log('手写reduce求和\n', sum) // 15

// reduce数组方法
const arr2 = [6, 7, 8, 9, 9]
const sum2 = arr2.reduce((acc, val) => acc + val, 0)
console.log('reduce数组方法求和\n', sum2)

// 数组扁平化
const arr3 = [1, 2, 3, 4, 5, [6, 7, 8, 9, 9, [1, 2, 34, 5]]]
const flat = arr3.flat(Infinity)
console.log('数组扁平化\n', flat)

// 数组去重
const arr4 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique = [...new Set(arr4)]
console.log('数组去重\n', unique)

// 数组去重
const arr5 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique1 = arr5.filter((item, index) => arr5.indexOf(item) === index)
console.log('数组去重\n', unique1)

// 数组去重
const arr6 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique2 = arr6.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val)
  }
  return acc
}, [])
console.log('数组去重\n', unique2)

// 数组去重
const arr7 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique3 = arr7.reduce((acc, val) => {
  if (!acc.includes(val)) {
    return acc.concat(val)
  }
  return acc
}, [])
console.log('数组去重\n', unique3)

// 数组去重
const arr8 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique4 = arr8.reduce((acc, val) => (acc.includes(val) ? acc : acc.concat(val)), [])
console.log('数组去重\n', unique4)

// includes数组去重
const arr9 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
const unique5 = []
arr9.forEach((item) => {
  if (!unique5.includes(item)) {
    unique5.push(item)
  }
})
console.log('includes数组去重\n', unique5)

const num = arr9.includes(1)
const nums = arr9.indexOf(2)
console.log('include\n', num)
console.log('include\n', nums)
