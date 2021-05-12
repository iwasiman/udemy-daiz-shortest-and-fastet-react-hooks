import React, { useState } from 'react'

function ItemArrayHook() {
  // itemsは初期値0件の配列
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems(
      [
        ...items,
        {id: items.length, value: Math.floor(Math.random() * 11)}
      ]
    )
  }

  // mapのところ、講習だと items.map(item => (<li ley={item.id}>{item.value}</li>)) と短く書いてる
  return (
    <div>
      <h2>ItemArrayHookコンポーネント</h2>
      <button onClick={addItem}>ついか</button>
      <ul>
        {
          items.map(
            (item) => {
              return (<li id={item.id} key={item.id}>{item.value}</li>)
            }
          )
        }
      </ul>
    </div>

  )
}

export default ItemArrayHook