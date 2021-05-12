import React, {useContext} from 'react'

import {MyCounterContext} from '../../App'

const Sec6CompoC = () => {
  const cContext = useContext(MyCounterContext)
  return (
    <div>
      <h3>Sec6CompoC</h3>
      <button onClick={() => cContext.countDispatch({type: 'incre1', value: 1})}>incre1st</button>
      <button onClick={() => cContext.countDispatch({type: 'decre1', value: 1})}>decre1st</button>
      <button onClick={() => cContext.countDispatch({type: 'reset'})}>リセツト</button>


    </div>
  )
}

export default Sec6CompoC