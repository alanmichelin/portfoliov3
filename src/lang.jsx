import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import { useState,useEffect } from 'react';

import './styles.css'

const Lang =({selectLanguage,content}) =>{
    const [lang, setLang] = useState('ES');
    const handleChange = (event) => {
        setLang(event.target.value);
      };
    useEffect(()=>{
        selectLanguage(lang)
    },[lang])

    
 
    return(
    <div style={{display:'flex', flexDirection:'row'}}>
       
      <p style={{fontFamily:'"Roboto","Helvetica","Arial",sans-serif', fontSize:'14px'}}>{content.toUpperCase()}</p>

        <Select
          edge='false'
          sx={{bgcolor:'#black',height:'52px'}}
          value={lang}
          onChange={handleChange}
          defaultValue={lang}
        >

          <MenuItem value={'ES'}> <img src="https://lovesongs.com/img/flags/spainflag.gif" style={{width:'28px'}}/></MenuItem>
          <MenuItem value={'EN'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" style={{width:'34px'}}/></MenuItem>
        </Select>

    
      </div>)
}
export default Lang