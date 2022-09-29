import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
    };
    fetchData();
  });
  return { response, error };
};


export default useFetch;