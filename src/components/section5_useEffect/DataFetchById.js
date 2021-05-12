import　React, {useState, useEffect} from 'react'

const DataFetchById = () => {
  const [post, setPost] = useState(null)
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(true)

  // 非同期通信なのでasync,awaitを使う
  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const item = await response.json()
    setPost(item)
    setLoading(false)
  }

  // 第2引数でステートを指定 idが変わるときだけ実行
  // [id]を指定すると以下の警告が出る。講習の画面でも同じ。なぜ?
  // React Hook useEffect has a missing dependency: 'fetchData'. Either include it or remove the dependency array.
  useEffect(() => {
    fetchData();
    console.log("useEffectでfetchData完了");
  })

  return (
    <div>
      <h2>DataFetchByIdコンポーネント</h2>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      {loading ? <h3>読み込んでるよ</h3> : <h3>{post.title}</h3>}

    </div>
  )

}

export default DataFetchById