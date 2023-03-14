// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// the reason why we don't simply return action is that in case we have multiple
// states managed and we want to update just some of them, we need to spread objects like below
// this way only properties that exist in both we'll be overwritten by action
// others will stay the same and won't be undefined if we don't inluclude "...state"
// return {
//  ...state,
//  ...{count: state.count + action.step},
// }
// this is explained in https://beta.reactjs.org/reference/react/useReducer#updating-objects-and-arrays-in-state

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step
      }
    }
    default: {
      throw new Error (`Unsupported action type: ${action.type}`)
    } 
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
