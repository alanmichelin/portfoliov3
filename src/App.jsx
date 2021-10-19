import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';
import Projects from './projects';

import { useEffect, useState, useRef } from 'react';

import data_ES from './data/data_ES.json'
import data_EN from './data/data_EN.json'
import Presentation from './presentation';
import './styles.css'
import Profile from './profile';


function App() {

 
  const [data,setData] = useState(data_ES)
  const [offset, setOffset] = useState('')
  const [prevOffset,setPrevOffset] = useState('')
  const [changeBackground,setChangeBackground] = useState({background:''})
  const myRef = useRef(null)
  const myRef2 = useRef(null)
  const [bgColor,setBGColor] =useState({R:0,G:29,B:90})



  const executeScroll =() =>{
    myRef.current.scrollIntoView() 
    console.log('u clicked')
  }
  const executeScroll2 =() =>{
    myRef2.current.scrollIntoView() 
    console.log(myRef2.current)
  }

  useEffect(()=>{
    window.onscroll= () =>{
      if(offset===''){
      setOffset(window.pageYOffset)
      }
      else{
        setPrevOffset(offset)
        setOffset(window.pageYOffset)
      }    

}
    
  },[])
  

  useEffect(()=>{
    setPrevOffset(offset)
    var prevR = bgColor.R
    var prevG = bgColor.G
    var prevB = bgColor.B

    if(offset>prevOffset){
    setBGColor({R:prevR+2,G:prevG+5,B:prevB+5})
    handleBackground()
    }
    else if(prevOffset>offset){
      setBGColor({R:prevR-2,G:prevG-5,B:prevB-5})
    handleBackground()
    }

 
    

  },[offset])



  const handleChange =(param) =>{
    if(param==='EN'){
      setData(data_EN)
    }
    if(param==='ES'){
      setData(data_ES)
    }
    
  }

  const handleBackground = () =>{

    setChangeBackground({background:`radial-gradient(rgb(${bgColor.R},${bgColor.G},${bgColor.B}),#101d1f)`})
    

    
  }
  

  return (
    
  

    <div className={'background'} style={changeBackground} item xs={12} lg={12}>     
     <div style={{ position:'absolute', left:'60vw',top:'5vw',}}>
      </div>
        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>
      
      <Presentation handleClick={executeScroll} handleClick2={executeScroll2} text={data.general.Buttons} changeLanguage={handleChange} />

      <Grid ref={myRef2} item xs={12} sm={12} lg={12} style={{marginTop:'50vh', marginBottom:'30vh'}}   >
        <Profile data={data.profile}/>
      </Grid>
 

    <Grid container ref={myRef} spacing={2} style={{paddingBottom:'20vh'}}>
    <Grid item xs={12} lg={12} style={{fontSize:'48px', color:'white'}}>
        <h3 style={{fontFamily:'Bebas Neue',letterSpacing:'3px',textAlign:'center'}}>Projects</h3>
        </Grid>
        {data.projects.map(e=>
        <Grid item xs={12} md={6} lg={3}>
        <Projects title={e.Project} languages={e.Languages} description={e.Description} sourceCode={e.Code} livedemo={e.LiveDemo} img={e.img}/>
        </Grid>
        )
        }
        </Grid>
    {/* </Container> */}
  </div>

  );
}

export default App;
