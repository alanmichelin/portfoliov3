import { Button } from "@mui/material"
import React from "react"
export const Icon = ({text,icon,handleClick}) =>{

    return(

            
  
          <Button color="inherit" onClick={()=>{handleClick(text)}}  >
          {icon}
          <p>{text}</p>
          </Button>


    )
  }