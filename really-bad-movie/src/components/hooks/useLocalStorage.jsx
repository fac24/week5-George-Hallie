import React from "react";

export default function useLocalStorage(key, variable) {
  const [localStore, setLocalStore] = React.useState(() => {
    return +localStorage.getItem(key) || 0;
  });

  React.useEffect(() => {
    if (variable > localStore) {
      setLocalStore(variable);
      localStorage.setItem(key, variable);
    }
  }, [variable, localStore]);

  return [localStore, setLocalStore];
}