import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
      const abortConst= new AbortController();

        fetch(url,{signal: abortConst.signal})
          .then((res) => {
            if (!res.ok) {
              throw Error("could not produce the data");
            }
    
            return res.json();
          })
          .then((data) => {
            setData(data);
            setisPending(false);
            setError(null);
          })
          .catch((err) => {
            if (err.name ==='AbortError') {
              console.log("Fetch connot be carried out")
            }else{
              setError(err.message);
              setisPending(false);
            }
           
          });

          return()=>{
            abortConst.abort();
          }
      }, [url]);
      return{data,isPending,error}
}
export default useFetch;