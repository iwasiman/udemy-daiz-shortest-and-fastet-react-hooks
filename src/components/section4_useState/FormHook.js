import React, {useState} from 'react'

function FormHook() {
  const [name, setName] = useState({firstName: '', lastName: ''})

  // input 要素のnameとidはそのまま使われる。
  // setStateの引数にオブジェクトを渡すと、変更後のキーだけが入った新しいオブジェクトになってしまう。
  // 下のようにスプレッド構文でマージする必要がある。
  return (
    <div>
      <h2>FormHookコンポーネントだよ</h2>
      <p>{name.firstName} {name.lastName}</p>
      <form>
        <input
          type="text"
          name="firstNameBox"
          id="firstNameBox"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text"
          name="lastNameBox"
          id="lastNameBox"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
      </form>
    </div>
  )

}

export default FormHook