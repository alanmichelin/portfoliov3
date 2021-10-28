import Grid from '@mui/material/Grid'
import TextAnimated from './textAnimation'
import { useEffect, useState } from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Lang from './lang'
import BasicModal from './modal'
import { Button, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles.css'
const Presentation = ({handleClick,handleClick2,text,changeLanguage}) =>{
    const [buttonClass,setButtonClass] = useState('')
    const[openModal,setOpenModal] = useState(false)

    useEffect(()=>{
      setOpenModal(false)
    },[openModal])




    const handleStartButtonClick = () =>{
      setButtonClass('buttonStart')
      setTimeout(()=>{handleClick('Profile')},400)
      setTimeout(()=>{setButtonClass('')},1000)

    }
    return (


      <div>
      <div className="bgMain" >
      <div className="boxes">
          <ul className="boxUl">
            <li className="li1"></li>
            <li className="li2"></li>
            <li className="li3"></li>
            <li className="li4"></li>
          </ul>
      </div>  
      </div>

      <BasicModal handleModal={openModal} />
      <div style={{textAlign:'center', paddingTop:'20vh', }}>
        <div style={{top:'15vh',right:'20vw',position:'absolute'}}>
        </div>
        <Grid container >
      <Grid item xs={12} data-aos="fade-down" >

      <div  className='presentation' style={{color:'white',position:'static'}}>
        <h1 data-aos='zoom-in' data-aos-duration="2000" style={{textAlign:'center', fontSize:'8vh' ,letterSpacing:'8px',fontFamily:'Montserrat'}}>Alan Michelin</h1> 
        <h1 data-aos='zoom-in' data-aos-duration="3000" style={{textAlign:'center', fontSize:'8vh' ,letterSpacing:'8px'}}>FULLSTACK DEVELOPER </h1>
      </div> 
        <div data-aos='zoom-in' data-aos-duration="4000" >
        <p style={{fontFamily:'roboto', fontWeight:100,fontSize:'2vh',color:'white'}}>CLICK TO START</p>

        <IconButton color='primary' className={buttonClass} style={{padding:'2vh',border:'2px solid white',backgroundColor:'rgb(154, 204, 228,0.3)',color:'white'}} onClick={handleStartButtonClick} ><KeyboardArrowDownIcon style={{fontSize:'4vh'}} /></IconButton>
        </div>
      </Grid>
      
    </Grid> 
 

  
    
    


    
   
      </div>
    </div>
        


    )}

    export default Presentation