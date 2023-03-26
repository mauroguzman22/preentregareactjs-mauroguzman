import React from 'react';
import {useEffect, useState} from "react"



const ConsumiendoApis = () => {

    const [nombre , setNombre] = useState ([])


    useEffect (  ( )=> {
     const getData =  fetch ("https://www.dolarsi.com/api/api.php?type=valoresprincipales")

        getData
        .then( (res)=> res.json ())
        .then( (res) => setNombre(res))
        .catch((err)=> console.log("catch"  , err))
        

     } , [ ]);

     console.log(nombre)

  return (
    <div>ConsumiendoApis</div>
  )
}

export default ConsumiendoApis