import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
    return () => console.log("UNMOUNT");
  }, []);

  return [items, setItems];
};
