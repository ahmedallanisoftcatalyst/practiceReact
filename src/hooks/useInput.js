import { useState } from "react";

export const useInput = (init) => {
  const [value, setValue] = useState(init);
  const changeValue = ({ target }) => setValue(target.value);
  return [value, changeValue];
};
