import {useState,useEffect} from 'react'

const useGeolocation = () => {

const [position,setPosition] = useState(null)
const [error,setError] = useState(null)

useEffect(() => {
if(!navigator.geolocation) {
  setError("geolocation is not supported")
return;
}


 const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

return () => navigator.geolocation.clearWatch(watchId);
}, [])
  return { position, error };
}

export default useGeolocation
