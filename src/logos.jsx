import Logo from './img/logos.json'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = {
  color:'black',
  padding: '0.5rem',
  textAlign: 'center',
  minHeight:'8.5rem',
  maxHeight:'8.5rem',
  fontFamily:'Montserrat',
  fontWeight:100,
  fontSize:'16px'
};

export default function Logos() {
    const logos = Logo.logos
    return (

      // {/* <Grid xs={12} sm={8} style={{display:'flex',justifyContent: 'space-evenly',flexWrap:'wrap'}}> */}
        
            logos.map(e=>
                
                <div style={Item}>
                <p><b>{Object.keys(e)}</b></p>
                <img src={Object.values(e)} alt={Object.keys(e)} srcset="" style={{maxWidth:'4rem',  maxHeight:'4rem'}}  />
                </div>
                
            )
            
   )
}


// const Logos = () =>{
//     const logos = Logo.logos
//     return(
//         <Grid xs={12}>
        
//         </Grid>
//     )
// }
// export default Logos