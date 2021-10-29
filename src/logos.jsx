import Logo from './img/logos.json'
import * as React from 'react';

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
        
            logos.map((e,idx)=>
                
                {
                return <div style={Item} key={idx}>
                  <p><b>{Object.keys(e)}</b></p>
                  <img src={Object.values(e)} alt={Object.keys(e)} srcSet="" style={{ maxWidth: '4rem', maxHeight: '4rem' }} />
                </div>;
              }
                
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