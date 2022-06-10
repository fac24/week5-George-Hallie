import React from "react";

export default function useLarger(var1, var2) {
  const [larger, setLarger] = React.useState(null);

  React.useEffect(() => {
    return var1 > var2 ? setLarger(1) : setLarger(2);
  }, [var1, var2]);

  return [larger, setLarger];
}
