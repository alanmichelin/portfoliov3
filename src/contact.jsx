import { Box } from "@mui/system"
import { Button, IconButton, TextField } from "@mui/material"
import React from "react"
import { Grid } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import './styles.css'
import Link from '@mui/material/Link';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.handleClickCv = () =>{
          props.handleClick('Resume')
        }
      }
    

render(){

    return(
      <Grid container item xs={12} xl={12} spacing={3} style={{height:'100vh',position:'relative'}} >
      <Grid item xl={3} lg={3} xs={1}/>
      <Grid item xl={6} >
      <Grid item xs={12}><h1 style={{fontFamily:'Montserrat',fontSize:'8vh'}}>{this.props.data[0]}</h1></Grid>
      <Grid item xs={12}>
        <h1 style={{fontFamily:'Montserrat',fontSize:'6vh'}}>{this.props.data[3]}</h1>
        <Button variant="contained" style={{marginLeft:'10vh'}} onClick={this.handleClickCv}>
        <SimCardDownloadIcon style={{width:'15vh',height:'15vh'}}/>
        </Button>
      
      </Grid>

      <form action="https://formsubmit.co/alan17pc@gmail.com" method="POST" >
      
      <h1 style={{fontFamily:'Montserrat',fontSize:'6vh'}}>{this.props.data[1]}</h1>
      <Grid item xs={12} xl={12} lg={12}  >
        
      <TextField
          required
          label="Email address"
          type="email"
          name='email'
          variant="filled"  
         
          style={{marginRight:'4vw',marginBottom:'15px',width:'45vh'}}
        />

        <TextField
          label="Name"
          type="text"
          name='name'
          variant="filled" 
          style={{marginRight:'4vw',marginBottom:'15px',width:'45vh'}}
        />

        </Grid>
        <Grid item xs={12} xl={12}  >
         <TextField
          required 
          multiline
          rows={4}
          label="Message"
          type="text"
          name='text'
          variant="filled"
          style={{width:'100%',marginTop:'15px'}}
          />
       </Grid>

        <br/>
      <Button type="submit" style={{backgroundColor:'#4a8cad',color:'black',padding:'15px'}}> <SendIcon/> Send</Button>
       </form>
       <Grid container item xl={12} xs={12} style={{display:'flex',fontSize:'2.5vh',fontFamily:'arial'}} >
       
       <Grid item xs={12}><h1 style={{fontFamily:'Montserrat',fontSize:'6vh'}}>{this.props.data[2]}</h1></Grid>
          <Grid item md={6} xs={6}>


            <LinkedInIcon style={{width:'6vh',height:'6vh',color:'#0d5dad'}}/>
            <Link href="https://www.linkedin.com/in/alan-michelin/" underline="hover">
            <b>{'Alan Michelin'}</b>
            </Link>
              <br/>

            <GitHubIcon style={{width:'6vh',height:'6vh',color:'#0d5dad'}}/>
            <Link href="https://github.com/alanmichelin/" underline="hover">
            <b>{'alanmichelin'}</b>
            </Link>
            <br/>

            <EmailIcon style={{width:'6vh',height:'6vh',color:'#0d5dad'}}/>
            <Link href="mailto:alangmichelin@gmail.com" underline="hover">
            <b>{'alangmichelin@gmail.com'}</b>
            </Link>

            </Grid>
            <div style={{width:'100%',marginBottom:"10vh"}}></div>
        </Grid>
       </Grid>

        
       </Grid>
    )
}
}