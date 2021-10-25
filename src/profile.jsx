import {  Grid } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import Logos from "./logos";
import Me from './img/alanm.jpg'
import { useRef, useState } from "react";


const Profile = ({data}) =>{

    return(
    <Grid item lg={12} container spacing={2} style={{fontFamily:'Montserrat'}} >

        <Grid  item lg={3} md={12} />

            
            <Grid item lg={4} md={12} xs={12}  style={{marginTop:'10vh',display:'flex',justifyContent:'center'}}>
                    <img src={Me} alt="alanm" srcset="" style={{width:'50vh', heigth:'auto', borderRadius:'50%'}} />
                </Grid>
            <Grid item lg={4} md={12} sm={12}>

                <h3 style={{fontSize:'7vh'}}>{data.about}</h3>

                <div  style={{fontSize:'2vh'}}>
                <p data-aos="fade-right"><PersonIcon style={{position:'relative',top:'4px'}}/> Alan Michelin </p>
                <p data-aos="fade-right"><LocationOnIcon  style={{position:'relative',top:'4px'}}/> Argentina, Buenos Aires</p>
                <p data-aos="fade-right"><TodayIcon  style={{position:'relative',top:'4px'}}/> {data.age} </p>
                <p data-aos="fade-right"><SchoolIcon  style={{position:'relative',top:'4px'}}/> {data.uni}</p>
                <p data-aos="fade-right"><InfoIcon  style={{position:'relative',top:'4px'}}/> {data.desc}</p>
                </div>
            </Grid>

                
              
            
            <Grid  item lg={3} md={12} />
    
                <Grid item lg={6} md={12} sm={12}>

                <h3 style={{ fontSize:'7vh', marginTop:'10vh' }}>{data.tech}</h3>
                    <Grid item style={{display:'flex',justifyContent: 'space-evenly',flexWrap:'wrap'}}>
                    <Logos/>
                    </Grid>
                </Grid>

   
    </Grid>
)
}

export default Profile