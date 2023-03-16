import { useEffect, useState } from "react";

export default function useFetch(ipAddress : string){
  
  const API_KEY = 'at_LDtkrYuF6WKR3AkLwAnMj1QmfYBso';

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`)
    .then(async (res) => {
      if(res.ok){
        const data = await res.json();
        setData(data);
      }else{
        if(res.status === 422){
          throw new Error('invalid ip address format!');
        }else{
          throw new Error('failed to fetch data!');
        }
      }
    })
    .catch((err) => {
      setError(err.message);
      alert(err.message);
    })
    .finally(() => setLoading(false));
  }, [ipAddress]);

  return {
    loading, data, error
  }

};