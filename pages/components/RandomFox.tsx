import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { random as Random } from "lodash"

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const [srcCurrent, setSrcCurrent] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // New Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrcCurrent(src);
          console.log(src);
        }
      });
    });

    // observer node
    if (node.current) {
      observer.observe(node.current!);
    }

    // disconnect
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={node} src={srcCurrent} {...imgProps} />;
};

export const addnewFox = () => {
  const newImageItem = {
    id: generateId(),
    url: `https://randomfox.ca/images/${random()}.jpg`,
  };
  return newImageItem;
};

export const generateId = () => Math.random().toString(36).substring(2, 10);

export const random = () => Random(1,100);
