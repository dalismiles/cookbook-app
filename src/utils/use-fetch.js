import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false); // true|false
  const [data, setData] = useState(null); // null|Response
  const [error, setError] = useState(null); // null|Error|false

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};
