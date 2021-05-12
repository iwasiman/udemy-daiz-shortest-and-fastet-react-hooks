import React, {useState} from 'react'

// ここはconst CounterHook = () => でやるのが普通では?
function CounterHook() {
  const [count, setCount] = useState(0)

  const incrementCountFn = () => {
    //setCount(count + 1)
    setCount((prevCount) => {return prevCount + 1})
  }
  const incrementCount10Fn = () => {
    for (let i = 0; i < 10; i++) {
      //setCount(count + 1); // これだと1づつしか上がらない
      setCount(prevCount => prevCount + 1)
      //const tempFn = (a) => {return a + 1}
      //setCount(tempFn(count)) これだとだめ。
      console.log("incrementCount10Fn(): ", count);
    }
  }

  return (
    <div >
      <h2>React Hooks版のCounterHookコンポーネント</h2>
      <h2>{count}</h2>
      <button onClick={incrementCountFn}>+していくよ</button>
      <button onClick={incrementCount10Fn}>+10していくよ</button>


    </div>

  )
}

export default CounterHook