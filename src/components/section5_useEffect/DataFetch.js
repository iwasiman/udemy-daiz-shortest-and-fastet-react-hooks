import　React, {useState, useEffect} from 'react'

const DataFetch = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 非同期通信なのでasync,awaitを使う
  const fetchData = async () => {
    const response = await fetch('https://api.randomuser.me')
    const data = await response.json()
    const [item] = data.results
    setUser(item)
    setLoading(false)
  }

  // 初回表示のみ実行
  useEffect(() => {
    fetchData();
    console.log("useEffectでfetchData完了");
  }, [])

  return (
    <div>
      <h2>DataFetchコンポーネント</h2>
      {loading ? <h3>読み込んでるよ</h3> : <h3>{user.name.first} {user.name.last}</h3>}
    </div>
  )

}

export default DataFetch