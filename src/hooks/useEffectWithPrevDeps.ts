import { useEffect, useRef } from "react";

const useEffectWithPrevDeps = <const T extends readonly any[]>(
  cb: (args: T | readonly []) => void,
  dependencies: T
) => {
  const prevDepsRef = useRef<T>();

  return useEffect(() => {
    const prevDeps = prevDepsRef.current;
    prevDepsRef.current = dependencies;

    return cb(prevDeps || []);
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, dependencies);
};

export default useEffectWithPrevDeps;
