import { useState } from 'react';

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };


  return { count, increment };
}
