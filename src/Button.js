import React from 'react';
import React, { useState } from 'react';

export default function Button(props) {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };
  let reset = () => {
    setCount(count - count);
  };
  let { action, title } = props;
  return (
    <div>
      {' '}
      <button varient="primary" onClick={incrementCount}>
        couter is on{count}
      </button>
      <div>
        <p>
          <button varient="primary" onClick={reset}>
            Reset
          </button>
        </p>
      </div>
    </div>
  );
}
