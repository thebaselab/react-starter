import { hot } from 'react-hot-loader/root';
import React from 'react';

const App = () => {

  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>
        React App Without CRA 🤖
      </h1>
      <h2>
        count: {count}
      </h2>
      <button onClick={() => {setCount(count + 1)}}>Click</button>
    </>
  )
}

export default hot(App);