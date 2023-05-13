import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
    const request = await fetch(url);
            const response = await request.json();
            setData(response.results)
        }
    catch (error) {
            console.log("there is an error")
            setError(true)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url]);

  return [data, error];
};

export default useFetch;