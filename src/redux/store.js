import { createStore } from 'redux'
import action from './actions'

var copystate={
  num:0,
  text:'hello word'
}
var store = createStore((state={
  num:0,
  text:'hello word'},action)=>{
  
  switch(action.type) {
    case 'changenum':
      copystate.num++;
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