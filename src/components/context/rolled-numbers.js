import React from "react";

const rolledNumbers = React.createContext({
  numbers: [],
  setRolledNumbers: (array) => {},
});

export const useRolledNumbers = () => {
  const [numbers, setNumbers] = React.useState([]);

  const setRolledNumbers = React.useCallback((array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    array.push(sum);
    setNumbers(array);
  }, []);

  return {
    numbers,
    setRolledNumbers,
  };
};

export default rolledNumbers;
