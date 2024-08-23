import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
     const fetchPlaces = async()=>{
      setIsLoading(true)

      try{

        const response  =  await fetch('http://localhost:8000/places')
        if(!response.ok){
          throw new Error("Failed to fetch places")
        }       
        const resData = await response.json()
        setAvailablePlaces(resData.places)

      }catch(error){  
        setError(error)
      }
      setIsLoading(false)
     }
      
     fetchPlaces()
    
  },[])

  if(error){
    return <ErrorPage title={"An Error Occured"} message={error.message}/>
  }


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText={"Fetching places..."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
