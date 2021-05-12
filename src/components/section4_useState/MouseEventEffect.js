import React, { useState, useEffect} from 'react'

const MouseEventEffect = () => {
  console.log("MouseEventEffect関数 called!");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  // 第2引数に空配列を渡すと初回レンダー時のみ、componentDidMountと等価。
  useEffect(() => {
    console.log("MouseEventEffectコンポ useEffect呼ばれたぞい");
    window.addEventListener('mousemove', getMousePosition)
    return () => {
      console.log("useEffectの戻り値に定義した関数起動 componentWillUnmountの代わり");
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])

  return (
    <div>
      <h2>MouseEventEffectコンポーネント</h2>
      <p>x座標: {x} y座標: {y}</p>

    </div>
  )
}

export default MouseEventEffect
