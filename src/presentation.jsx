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
<Grid >
  <BasicModal handleModal={openModal} />
  {/* <BasicModal handleOpen={openModal} openModal ={openzd}/> */}
      <div style={{ height:'100vh' , zIndex:-2,display:'block'}}>
      <div style={{textAlign:'center', paddingTop:'20vh', }}>
        <div style={{top:'15vh',right:'20vw',position:'absolute'}}>
        <Lang selectLanguage={changeLanguage} content={text[3]}/>
        </div>
      <h1 style={{textAlign:'center', fontFamily:'Bebas Neue', fontSize:100 , color:'white',letterSpacing:'8px'}}>FULL-STACK DEVELOPER</h1> 
      
      <TextAnimated/>
      <Grid container >  

        <Grid xs={12}  lg={12} style={{display:'flex',justifyContent: 'space-evenly', color:'white',fontFamily:['Noto Sans Mono', 'monospace']}}>

        <div>
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer'}} onClick={handleClick2}>
          <PersonRoundedIcon sx={{ color: lightBlue[900], fontSize: '6vh' }} />
          
        </Avatar>
        <h3 style={{textAlign:'center'}}>{text[0]}</h3>
        </div>
        <div>
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer' }} onClick={handleOpen}  >
          <SimCardDownloadIcon  sx={{ color: lightBlue[900], fontSize: '6vh'}}/>
        </Avatar>
        <h3 style={{textAlign:'center'}}>{text[1]}</h3>
        </div>
        <div>

        
        <Avatar sx={{ bgcolor: 'white', width: '10vh', height: '10vh', boxShadow:'0px 10px 15px 5px rgba(0, 0, 0, 1)', cursor:'pointer' }} onClick={handleClick}>
          <CodeRoundedIcon  sx={{ color: lightBlue[900], fontSize: '6vh' }}/>
        </Avatar>
        <h3 style={{textAlign:'center'}}>{text[2]}</h3>
        </div>
        </Grid>
    </Grid> 
 

  
    
    


    
   
      </div>
    </div>
        

    
    </Grid>
    )}

    export default Presentation