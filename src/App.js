import React, {createContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Counter from './components/section4_useState/Counter'
import CounterHook from './components/section4_useState/CounterHook';
import FormHook from './components/section4_useState/FormHook'
import ItemArrayHook from './components/section4_useState/ItemArrayHook'
import MouseEventEffect from './components/section4_useState/MouseEventEffect';
import EffectHook from './components/section5_useEffect/EffectHook';
import DataFetch from './components/section5_useEffect/DataFetch';
import DataFetchById from './components/section5_useEffect/DataFetchById';
import CompoC from './components/section6_useContext/CompoC'
import CounterReducer from './components/section6_useReducer/CounterReducer';
import Sec6CompoA from './components/section6_useReducer/Sec6CompoA';
import Sec6CompoB from './components/section6_useReducer/Sec6CompoB';
import Sec6CompoC from './components/section6_useReducer/Sec6CompoC';
import FocusInput from './components/section10_useRef/FocusInput'
import Count from './components/section10_useRef/Count'

export const MyUserContext = createContext()
export const MyLanguageContext = createContext()

// section6用
export const MyCounterContext = createContext()
const initialState = {
  firstCounter: 0
}
const reducer = (state, action) => {
  // スプレッド構文を使ってオブジェクト内のfirst/second指定した方だけ更新
  switch(action.type) {
    case 'incre1':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decre1':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

// section6 17  useRecuder 外部APIからdataを取ってこよう
const sec617InitialState = {
  loading: true,
  error: '',
  post: {}
}
const sec617reducer = (state, action) => {
  switch(action.type) {
    case 'fetch_success':
      return {loading: false, post: action.payload, error: ''}
    case 'fetch_error':
      return {loading: false, post: {}, error: 'データ取得に失敗したでやんす～'}
    default:
      return state
  }
}

const App = () =>  {
  // useContextとuseStateを併せて使い、App->CompoC->CompoE->CompoF と子孫コンポーネントに値を渡す
  // eslint-disable-next-line
  const [user, setUser] = useState({name: 'juju-sama', age: '17'})
  // eslint-disable-next-line　
  const [language, setLanguage] = useState('日本語でおｋ')

  // section6 並列なCompoA,B,Cで共有
  const [count, dispatch] = useReducer(reducer, initialState)
  // section6 17 外部データ
  const [sec617state, sec617dispath] = useReducer(sec617reducer, sec617InitialState)
  useEffect(() => {
    // JSONを返してくれる外部サービスを使う
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        sec617dispath({type: 'fetch_success', payload: res.data})
      })
      .catch(err => {
        sec617dispath({type: 'fetch_error'})
      })
  })



  return (
    <div className="App">
      <Counter />
      <CounterHook />
      <FormHook />
      <ItemArrayHook />
      <EffectHook />
      <MouseEventEffect />
      <DataFetch />
      <DataFetchById />
      <MyUserContext.Provider value={user}>
        <MyLanguageContext.Provider value={language}>
          <CompoC />
        </MyLanguageContext.Provider>
      </MyUserContext.Provider>
      <CounterReducer />

      <h4>Sec6CompoABCで共有 カウント:{count.firstCounter}</h4>
      <MyCounterContext.Provider value={{ countState: count, countDispatch: dispatch }} >
        <Sec6CompoA />
        <Sec6CompoB />
        <Sec6CompoC />
      </MyCounterContext.Provider>

      <h4>Sec6 17 外部APIからデータを取得</h4>
      <h6>{sec617state.loading ? 'ローディング中...' : 'ロード完了'}</h6>
      <h6>{sec617state.error ? sec617state.error : 'エラーなし'}</h6> 
      {sec617state.post.userId}
      {sec617state.post.id}
      {sec617state.post.title}
      {sec617state.post.body}

      <FocusInput />
      <Count />

    </div>
  );
}

export default App;
