import { useState } from "react";

export const useCount = (initialValue = 0) => {
  const [activeIndex, setActiveIndex] = useState(initialValue);

  const increment = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const decrement = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const reset = () => {
    setActiveIndex(initialValue);
  };

  return [activeIndex, increment, decrement, reset];
};
