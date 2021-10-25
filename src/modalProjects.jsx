import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import './styles.css'


export default function ModalProjects({data}) {

  const [modalClassName,setModalClassName] = useState('')
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setModalClassName('modalprojects')
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [modalData,setModalData] = useState('')
  React.useEffect(()=>{
        if(data!==''){
          setModalData(data)
        handleOpen()
      }

    
  },[data])

    

  return (


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid xl={6} xs={11} className={modalClassName} style={{backgroundColor:'white'}}>
        {/* <Box sx={style}> */}
        
          <Button style={{position:'absolute',right:'5px',top:'5px'}} onClick={handleClose}><CloseIcon/></Button>
            <div>
              {data==='' ? <div/>
              :
              // <div style={{backgroundColor:'#69b7df'}}>
              <div>
              <h1 style={{paddingTop:'25px',textAlign:'center'}}>{data.title}</h1>
              <Grid item xl={12} sm={12} style={{paddingLeft:'2vh',paddingRight:'2vh', justifyContent: 'center',display: 'flex'}}>
              
              <img src={require('.' + data.img).default} 
              style={{maxWidth:'100%',maxHeight:'80vh'}} 
              alt="" srcset="" />
                

              </Grid>
                <div >
                <p><b>Description:</b></p>
                <p style={{fontWeight:900}}>
                  {data.description}
                <br/>
                <p><b>Technologies used:</b></p>

                    {data.languages}
                </p>
                </div>
              </div>
              
              
              }
              
                    
                </div>
                
        {/* </Box> */}
        </Grid>
      </Modal>

  );
}