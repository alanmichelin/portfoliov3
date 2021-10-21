import React from 'react';
import {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import p from '@mui/material/p';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: '#BEBEBE',
      disabled: '#919191'
    }
  }
});
const Projects = (props) =>{

  const [isActive, setIsActive] = useState(false)
  const [codeDisabled, setCodeDisabled] = useState(true)
  const [demoDisabled, setDemoDisabled] = useState(true)
  const [sourceCode,setSourceCode] = useState('')
  const [liveDemo,setLiveDemo] = useState('')
  let divStyle = {width:'100%', height:'1vh', backgroundColor:'#b0bec5',zIndex:5} 

  useEffect(()=>{
    checkCode()
    checkDemo()
  },[props])

  const checkCode = () =>{
    if(props.sourceCode.length>1){
    setCodeDisabled(false)
    setSourceCode(props.sourceCode)
    }
  }
  const checkDemo = () =>{
    if(props.livedemo.length>1){
      setDemoDisabled(false)
      setLiveDemo(props.livedemo)
      }
  }
 


const card = (
  <div style={{overflow:'hidden'}}>
    <div style={divStyle}></div>
    <CardContent style={{textAlign:'center', backgroundColor:'#081A44', color:'#ADDEEB', fontFamily:['Roboto', 'sans-serif'],  fontStyle:''}}>
      <p variant="h5" component="div" style={{display:'inline-block',height:'60px'}}>
        {props.title}
      </p>
      
      <div style={{display:'flex'}}>

      <img src={require('.' + props.img).default} alt="img" style={{float:'left', width:'100%', height:'300px',objectFit:'cover'}} />
      </div>
      <p sx={{ mb: 1.5 }} color="text.secondary" style={{display:'inline-block',height:'40px'}}>
        {props.languages}
      </p>
      <p variant="body2" style={{display:'inline-block', height:'100px', overflow:'hidden'}} >
        {props.description}  
      </p>
    
    <CardActions style={{justifyContent: 'space-evenly'}}>
    <div>
    <ThemeProvider theme={theme}>
    <Button variant="contained" disabled={codeDisabled}  href={sourceCode}>
      Source code <GitHubIcon/>
      </Button>
    <Button variant="contained" disabled={demoDisabled} href={liveDemo}>
      Live Demo <PlayCircleIcon/>
      </Button>
      </ThemeProvider>
      </div>  
      </CardActions>
    </CardContent>
  </div>
);


  return (

      <Card variant="outlined">{card}</Card>

  )
  }

  export default Projects
