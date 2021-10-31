/* eslint-disable no-undef */
import React from 'react';
import {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './styles.css'

import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';



const Projects = (props) =>{


  const [codeDisabled, setCodeDisabled] = useState(true)
  const [demoDisabled, setDemoDisabled] = useState(true)
  const [sourceCode,setSourceCode] = useState('')
  const [liveDemo,setLiveDemo] = useState('')

  const [cardClass,setCardClass]= useState('')
  const [cardStyle,setCardStyle] = useState('')

  const cardStyle1 = {card:{backgroundColor:'#e6e6e6',color:'#161616',fontFamily:'Montserrat',border:'3px solid #086d9c'},
  cardAction:{padding:'5px'},
  h5:{fontSize:'16px',fontWeight:1000,marginLeft:'10px',fontFamily:'Montserrat',marginTop:'5px',marginBottom:'5px'}
  }
  
  const cardStyle2 = {card:{backgroundColor:'#343a40',color:'#f8f9fa',fontFamily:'Montserrat'},
  cardAction:{padding:'5px'},
  h5:{fontSize:'16px',marginLeft:'10px',fontFamily:'Montserrat',marginTop:'5px',marginBottom:'5px'}
  }
 

  useEffect(()=>{
    checkCode()
    checkDemo()
  },[props])

  useEffect(()=>{
    props.mode ? setCardStyle(cardStyle2) : setCardStyle(cardStyle1)
    
  },[props.mode])

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

  const handleClick = () =>{
    setCardClass('cardanimation')
    
    setTimeout(()=>{
      props.passDataToModal(props)
  
  },100)
    setTimeout(()=>{setCardClass('')},1000)
  }


  

  return (
      <Card className={cardClass} style={cardStyle.card} onClick={handleClick} >
      <CardActionArea style={cardStyle.cardAction}>
      <h5 style={cardStyle.h5}>
          {props.title}
          </h5>
        <CardMedia
          component="img"
          height="240"
          image= {require('.' + props.img).default}
          alt={props.title}
        />
        

      </CardActionArea>
      <CardActions>
      <Button variant="contained" disabled={codeDisabled}  href={sourceCode} target="_blank">
        Code <GitHubIcon/>
        </Button>
        <Button variant="contained" disabled={demoDisabled} href={liveDemo} target="_blank">
          Demo <PlayCircleIcon/>
      </Button>

    

      </CardActions>
    </Card>
      // </div>
  )
  }

  export default Projects
