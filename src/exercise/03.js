// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// we can move CountContext and provider as well as the hook to a separate module for convenience
const CountContext = React.createContext()

function CountProvider(props) {
  const state = React.useState(0)

  return <CountContext.Provider value={state} {...props} />
}

function useCount() {
  const contextValue = React.useContext(CountContext)

  if (!contextValue) {
    throw new Error(
      'useCount may only be used with a child of a Count Provider',
    )
  }

  return contextValue
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
