/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [quote, setQuote] = useState(url);

  let fetchData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [quote];
};

export default useFetch;
