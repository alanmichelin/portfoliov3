import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DownloadIcon from '@mui/icons-material/Download';
import cv_es from './img/cv_es.png'
import cv_en from './img/cv_en.png'
import pdf_en from './img/cv_en.pdf'
import pdf_es from './img/cv_es.pdf'
import CloseIcon from '@mui/icons-material/Close';
const style = {
  display:'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};


export default function BasicModal({handleModal}) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected,setSelected] = useState(cv_en)
  React.useEffect(()=>{
      if(handleModal===true){
        handleOpen()
      }
    
  },[handleModal])

    
  const changeSelected = (params) =>{
    setSelected(params)
  }
  return (
    <div >

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button style={{marginLeft:'auto',rigth:'0px'}} onClick={handleClose}><CloseIcon/></Button>
            <div style={{display:'flex', flexDirection:'row', marginBottom:'25px'}} >
              
                <div style={{display:'flex', flexDirection:'column'}}>
                    <p>English</p>
                    <img src={cv_en} alt="" style={{height:'20vh', border: selected===cv_en ? '2px solid blue' : '' }} onClick={()=>{changeSelected(cv_en)}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginLeft:'25px'}} >
                    <p>Español</p>
                    <img src={cv_es} alt="" style={{height:'20vh', border: selected===cv_es ? '2px solid blue' : '' }}  onClick={()=>{changeSelected(cv_es)}}/> 
                </div>
            </div>
                <div>
                    <img src={selected} alt="" style={{height:'50vh',width:'auto'}} /> 
                    
                </div>
                <Button variant='contained' startIcon={<DownloadIcon/>} onClick={()=>{window.open(selected===cv_es ? pdf_es : pdf_en, '_blank')}}>Download PDF</Button>   
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}