import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue)=>{
    const [isFetching, setIsFetching ] = useState()
    const [error, setError] = useState()
    const [data ,setData] = useState(initialValue) 

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

   return {isFetching,data,setData, error}   
}

export default useFetch