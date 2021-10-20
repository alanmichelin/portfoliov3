import Grid from '@mui/material/Grid'
import TextAnimated from './textAnimation'
import { useEffect, useState } from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import Avatar from '@mui/material/Avatar';
import {blueGrey, lightBlue} from '@mui/material/colors';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Lang from './lang'
import BasicModal from './modal'
const Presentation = ({handleClick,handleClick2,text,changeLanguage}) =>{
      const[openModal,setOpenModal] = useState(false)
    useEffect(()=>{
      setOpenModal(false)
    },[openModal])
    const handleOpen = () =>{
      setOpenModal(!openModal)
    }
    return (


      <div style={{ height:'100vh' , zIndex:-2,display:'block'}}>
      <BasicModal handleModal={openModal} />
      <div style={{textAlign:'center', paddingTop:'20vh', }}>
        <div style={{top:'15vh',right:'20vw',position:'absolute'}}>
        <Lang selectLanguage={changeLanguage} content={text[3]}/>
        </div>
        <Grid container >
      <Grid item xs={12}>
        <h1 style={{textAlign:'center', fontFamily:'Bebas Neue', fontSize:'5em' , color:'white',letterSpacing:'8px'}}>FULL-STACK DEVELOPER</h1> 
      </Grid>
      <Grid item xs={12}>
      <TextAnimated/>
      </Grid>
        <Grid lg={4}></Grid>
        <Grid xs={12} md={12} lg={4} style={{display:'flex',justifyContent: 'space-evenly', color:'white',fontFamily:['Noto Sans Mono', 'monospace']}}>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h3>{text[0]}</h3>
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer'}} onClick={handleClick2}>
          <PersonRoundedIcon sx={{ color: lightBlue[900], fontSize: '6vh' }} />
        </Avatar>
        
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h3>{text[1]}</h3>
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer' }} onClick={handleOpen}  >
          <SimCardDownloadIcon  sx={{ color: lightBlue[900], fontSize: '6vh'}}/>
        </Avatar>
        
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

        <h3 >{text[2]}</h3>
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer' }} onClick={handleClick}>
          <CodeRoundedIcon  sx={{ color: lightBlue[900], fontSize: '6vh' }}/>
        </Avatar>
        
        </div>
        </Grid>
    </Grid> 
 

  
    
    


    
   
      </div>
    </div>
        


    )}

    export default Presentation