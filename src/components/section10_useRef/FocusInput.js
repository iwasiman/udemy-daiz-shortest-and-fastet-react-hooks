import React, {useEffect, useRef} from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return(
    <div>
      <h4>FocusInputコンポーネント</h4>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput