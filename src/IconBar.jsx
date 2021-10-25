import { Button } from "@mui/material"

export const Icon = ({text,icon,handleClick}) =>{

    return(

            
  
          <Button color="inherit" onClick={()=>{handleClick(text)}}  >
          {icon}
          <p>{text}</p>
          </Button>


    )
  }