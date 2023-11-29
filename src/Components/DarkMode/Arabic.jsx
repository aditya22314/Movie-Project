import React, { useEffect, useState } from 'react'
import '../DarkMode/Arabic.css'
const Arabic = ({setapptog}) => {
  const [toggle, settoggle] = useState(false) 

 useEffect(()=>{
setapptog(toggle);
 },[toggle,setapptog])
  return ( 
    <div className="container ">
      <input type="checkbox" id="check" onClick={()=>settoggle(!toggle)}  /> 

      <label htmlFor ="check" className="button" ></label>
    </div >
  )
}

export default Arabic
