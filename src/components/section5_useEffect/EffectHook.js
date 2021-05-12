import React, {useState, useEffect} from 'react'

function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  // 講習ではuseEffect関数の中に書いている。
  const useEffectFunc = () => {
    // 初期表示のcomponentDidMount, 更新で再レンダリング時のcomponentDidUpdateで同じ処理を書かなくてよくなる。
    console.log("** useEffect called")
    return document.title = `クリック数は${count}回だよ`
  }
  // 第2引数にステートの配列をとると、そのステート変更時だけ呼ばれる。
  useEffect(useEffectFunc)

  // 講習だと<input type='text' value={name} onChange={setName(e => e.target.value)} で最初エラーになる
  return (
    <div>
      <h2>EffectHookコンポーネント</h2>
      <p>クリック数: {count} 回</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>name: {name}</p>
      <input type='text' value={name} onChange={(e) => {return setName(e.target.value)}}
      />

    </div>
  )
}

export default EffectHook