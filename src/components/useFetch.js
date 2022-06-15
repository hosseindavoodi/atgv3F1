import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const Fetchdata = async (url) => {
    try {
    const request = await fetch(url);
        if (request.status === 200) {
            const response = await request.json();
            setData(response.results)
        }
        else {
            throw "error"
        }
  
        }
    catch (error) {
            console.log("there is an error")
            setError(true)
    }
  }

  useEffect(() => {
    Fetchdata(url)
  }, [url]);

  return [data, error];
};

export default useFetch;