import React, { createContext } from 'react'
import Child from './Child'

export const Context = createContext()

const Discovery = () => {
  const number = 255
  return (
    <div id='about'>
      <Context.Provider value={{number, str: "salom"}}>
        <Child />
      </Context.Provider>
    </div>
  )
}

export default Discovery