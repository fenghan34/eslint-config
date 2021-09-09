import React, { FC, useEffect, useState } from 'react'

interface Props {
  count: string
}

export const App = ({ count }: Props) => {
  const [state, setState] = useState<string>(count)

  useEffect(() => {
    console.log(state)
  }, [])

  return (
    <>
      <div>{state}</div>
      <button onClick={() => setState(count + 1)}>Click me</button>
    </>
  )
}
