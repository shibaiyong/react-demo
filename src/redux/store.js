import { createStore } from 'redux'
import action from './actions'

var copystate={
  num:0,
  text:'hello word'
}
var store = createStore((state={  //注意传参数的方式
  num:0, text:'hello word'},action)=>{
  switch(action.type) {
    case 'changenum':
      copystate.num++;  //不建议直接修改state,     可以采用 ... 或者 Object.assign()
      return Object.assign({},state,{num:copystate.num})
      break;
    case 'changetext':
      return Object.assign({},state,{text:action.text})
      break;
    default :
      return state;
  }
})

export default store