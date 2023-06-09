import React from 'react'
import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom'
import { getShowById } from '../api/Api';
import { QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
// const useShowById = (showId) => {

//   const [showData , setShowData] = useState(null);
//   const [showError , setShowError] = useState(null);

//   useEffect(()=>{

//     async function fetchData(){
//       try{
//      const data = await getShowById(showId)
//      setShowData(data)
//       }
//       catch(err){
//        setShowError(err);
//       }
//     }
//     fetchData();
//   },[showId])
//   return [ showData , showError] 
// }

function Show() {

  const {showId} = useParams();
  // const {showData , showError} = useShowById(showId);
const  {data : showData, error : showError} = useQuery({
  queryKey:['show' , showId] ,
  queryFn: ()=> getShowById(showId)
} );

if(showError){
  return <div>we have error ${showError.message}</div>

}

if(showData ){
   return <div> {showData.name}</div>
}
 
return <div>  show page for {showId}</div>
  
}

export default Show
