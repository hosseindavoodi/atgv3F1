import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
    const request = await fetch(url);
            const response = await request.json();
            setData(response.results)
        }
    catch (error) {
            console.log("there is an error")
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url]);

  return data;
};

export default useFetch;