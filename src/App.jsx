import { useMemo, useState } from "react"
import React from "react";

const Child = React.memo(({ count, name }) => {

  return (
    <div>
      <h2>Child</h2>
      <p>Count: {count}</p>
    </div>
  )
});

const App = () => {

  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => count, [count]);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child
        count={memoizedCount}
      />
    </div>
  )
}

export default App;