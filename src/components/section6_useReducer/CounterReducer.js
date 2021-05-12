import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
  // スプレッド構文を使ってオブジェクト内のfirst/second指定した方だけ更新
  switch(action.type) {
    case 'incre1':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decre1':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'incre2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'decre2':
      return {...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return(
    <div>
      <h2>CounterReducerコンポーネント</h2>
      かうんと 1st:{count.firstCounter} 2nd: {count.secondCounter}
      <button onClick={() => dispatch({type: 'incre1', value: 1})}>incre1st</button>
      <button onClick={() => dispatch({type: 'decre1', value: 1})}>decre1st</button>
      <button onClick={() => dispatch({type: 'incre2', value: 10})}>incre2nd</button>
      <button onClick={() => dispatch({type: 'decre2', value: 10})}>decre2nd</button>
      <button onClick={() => dispatch({type: 'reset'})}>リセツト</button>

    </div>
  )
}

export default CounterReducer