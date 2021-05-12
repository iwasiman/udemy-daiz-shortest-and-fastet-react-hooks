import React, {useState, useEffect, useRef} from 'react'

const Count = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()

  // useEffect内で宣言したローカル変数intervalにJSXからアクセスsできない→useRefを使う
  useEffect(() => {
    //const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    };
  }, [])

  return (
    <div>
      <h4>Countコンポーネント</h4>
      <h5>{count}</h5>
      <button onClick={() => clearInterval(intervalRef.current)}>ストップ</button>
    </div>
  )
}

export default Count