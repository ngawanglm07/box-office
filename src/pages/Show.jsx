import React from 'react'
import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom'
import { getShowById } from '../api/Api';



function Show() {

  const {showId} = useParams();


  const [showData , setShowData] = useState(null);
  const [showError , setShowError] = useState(null);

    



  useEffect(()=>{

    async function fetchData(){
      try{
     const data = await getShowById(showId)
     setShowData(data)
      }
      catch(err){
       setShowError(err);
      }
    }
    fetchData();
  },[showId])



if(showError){
  return <div>we have error ${showError.message}</div>

}

if(showData ){
   return <div> {showData.name}</div>
}
 


   return <div>  show page for {showId}</div>
  
}

export default Show
