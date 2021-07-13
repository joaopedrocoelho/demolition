import React from "react";

const rolledNumbers = React.createContext({
  numbers: [],
  setRolledNumbers: (array) => {},
});

export const useRolledNumbers = () => {
  const [numbers, setNumbers] = React.useState([]);

  const setRolledNumbers = React.useCallback((array) => {
    if (array[0] === "bomb") {
      setNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    } else {
      setNumbers(array);
    }
  }, []);

  return {
    numbers,
    setRolledNumbers,
  };
};

export default rolledNumbers;
