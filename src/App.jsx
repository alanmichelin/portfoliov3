import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';
import Projects from './projects';

import { useEffect, useState, useRef } from 'react';

import data_ES from './data/data_ES.json'
import data_EN from './data/data_EN.json'
import Presentation from './presentation';
import './styles.css'
import Profile from './profile';
import 'aos/dist/aos.css'
import Aos from 'aos';
import BasicModal from './modal';
import ButtonAppBar from './appbar';
import Contact from './contact';
import ModalProjects from './modalProjects';
import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
function App() {

 
  const [data,setData] = useState(data_ES)
  const [offset, setOffset] = useState('')
  const [prevOffset,setPrevOffset] = useState('')
  const [changeBackground,setChangeBackground] = useState({background:''})
  const home = useRef(null)
  const projects = useRef(null)
  const profile = useRef(null)
  const contact = useRef(null)

  const [modal,setModal]= useState(false)
  const[openModal,setOpenModal] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
  const [projectsModalData,setProjectsModalData]= useState('')

  const executeScroll =(props) =>{
    console.log(props)
    if(props==='Inicio' || props==='Home') return home.current.scrollIntoView()
    if(props==='Perfil' || props==='Profile' ) return profile.current.scrollIntoView() 
    if(props==='Projects' || props==='Proyectos') return projects.current.scrollIntoView() 
    if(props==='Curriculum' || props==='Resume') return handleOpen()
    if(props==='Contacto' || props==='Contact') return contact.current.scrollIntoView() 

  }

  useEffect(()=>{
    setOpenModal(false)
  },[openModal])
  const handleOpen = () =>{
    setOpenModal(!openModal)
  }

  useEffect(()=>{
    Aos.init()

    
  },[])
  

  


  const handleChange =(param) =>{
    if(param==='EN'){
      setData(data_EN)
    }
    if(param==='ES'){
      setData(data_ES)
    }
    
  }
  const passDataToModal = (data) =>{
    
    setProjectsModalData(data)
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleMode = () =>{
    setDarkMode(!darkMode)
  }


return (   
  <div>
    <ButtonAppBar text={data.general.Buttons} handleClick={executeScroll} changeLanguage={handleChange}  />
    <BasicModal handleModal={openModal} />
    <div ref={home}>
      <Presentation 
      handleClick={executeScroll} 
      text={data.general.Buttons} 
      changeLanguage={handleChange}
      />
    </div>
      <Grid ref={profile} style={{marginTop:'30vh'}} item xs={12} sm={12} lg={12}>
        <Profile data={data.profile}/>
      </Grid>
 

    <Grid container ref={projects} spacing={2} >
      <Grid item xs={12} lg={3}/>
      <Grid item xs={12} lg={9}>
        <h3 style={{fontFamily:'Montserrat',fontSize:'7vh'}}>{data.general.Buttons[2]}</h3>
        <p style={{marginTop:'-5vh'}}>{data.general.instructions}</p>
        <div style={{display:'flex'}}>
        <DarkModeIcon style={{fontSize:'4vh'}}/>
        <Switch {...label} defaultChecked onClick={handleMode} />
        <LightModeIcon style={{fontSize:'4vh'}}/>

        </div>

      </Grid>

 

      <Grid xl={3}/>

          <Grid container item xl={6} spacing={3}>

          {data.projects.map((e,idx)=>
            <Grid data-aos={idx%2===0? "fade-up" : "fade-down"} item xs={12} md={6} lg={6} xl={4} key={idx}> 
            <Projects 
            
            title={e.Project} 
            languages={e.Languages}
            description={e.Description} 
            sourceCode={e.Code} 
            livedemo={e.LiveDemo} 
            img={e.img}
            passDataToModal={passDataToModal}
            mode={darkMode}
            />
            </Grid>
            )
          }

          <ModalProjects data={projectsModalData} />
          
          </Grid>


          <Grid item xl={12} sm={12} style={{marginLeft:'15px'}}>

          </Grid>
          

        
      </Grid>
      <div ref={contact}>

      <Contact data={data.contact} handleClick={executeScroll} />
        
      </div>

    
  </div>
  );
}

export default App;
