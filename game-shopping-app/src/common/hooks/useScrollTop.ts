import { MutableRefObject, useEffect, useState } from "react";

export const useScrollTop = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref?.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}