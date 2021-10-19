import {  Grid } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import Logos from "./logos";

const Profile = ({data}) =>{

return(
    <Grid container spacing={2} >
        <Grid  item xs={12} sm={12} style={{fontSize:'24px', color:'white'}}>
        <h2 style={{fontFamily:'Bebas Neue',textAlign:'center',letterSpacing:'3px',fontSize:'4rem',marginBottom:'-2rem'}}>{data.profile}</h2>
        </Grid>
        <Grid  item xs={12} sm={2} >
        </Grid>
        <Grid item xs={12} sm={4} style={{fontSize:'24px', color:'white'}}>
        
        <h3 style={{fontFamily:'Bebas Neue',letterSpacing:'3px',textAlign:'center'}}>{data.about}</h3>
    <p style={{fontFamily:['Open Sans Condensed', 'sans-serif']}}><PersonIcon style={{position:'relative',top:'4px'}}/> Alan Michelin </p>
    <p style={{fontFamily:['Open Sans Condensed', 'sans-serif']}}><LocationOnIcon  style={{position:'relative',top:'4px'}}/> Argentina, Buenos Aires</p>
    <p style={{fontFamily:['Open Sans Condensed', 'sans-serif']}}><TodayIcon  style={{position:'relative',top:'4px'}}/> {data.age} </p>
    <p style={{fontFamily:['Open Sans Condensed', 'sans-serif']}}><SchoolIcon  style={{position:'relative',top:'4px'}}/> {data.uni}</p>
    <p style={{fontFamily:['Open Sans Condensed', 'sans-serif']}}><InfoIcon  style={{position:'relative',top:'4px'}}/> {data.desc}</p>

    </Grid>
        <Grid item xs={12} sm={4} style={{ fontSize:'24px', color:'white',textAlign:'center'}}>
        <h3 style={{fontFamily:'Bebas Neue',letterSpacing:'3px'}}>{data.tech}</h3>
      <Logos/>
            {/* <div className='container' >
                
                <div className="outer-circle">
                <div className='inner-circle'></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </div> */}
        </Grid>
   
    </Grid>
)
}

export default Profile