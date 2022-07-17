import { useEffect, useRef, useState } from "react";

export function UseDebounce(value: string, delay: number) {
  const [newValue, setNewValue] = useState(value);
  // let timer: NodeJS.Timeout | undefined
  useEffect(() => {
    const timer = setTimeout(() => {
      setNewValue(value);
    }, delay);
    return () => clearInterval(timer);
  }, [value, delay]);
  return newValue;
}
