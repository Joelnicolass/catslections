import React, { useEffect, useState } from "react";

const useDebounce = ({
  value,
  delay = 500,
  callback = () => {},
  dependencies = [],
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, ...dependencies]);

  return debouncedValue;
};

export default useDebounce;
