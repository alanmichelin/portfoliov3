import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
const Lang =({selectLanguage,content}) =>{
    const [lang, setLang] = useState('ES');
    const handleChange = (event) => {
        setLang(event.target.value);
      };
    useEffect(()=>{
        selectLanguage(lang)
    },[lang])
    return(
    <div style={{marginRight:0,marginLeft:'auto',display:'flex',alignItems:'center', color:'white'}}>
       
      <p style={{fontSize:'24px',fontFamily:['Noto Sans Mono', 'monospace'],paddingTop:'5px'}}>{content}</p>
      <FormControl sx={{ m: 1, width: 70, maxHeight:40 }}>
        <Select
          value={lang}
          onChange={handleChange}
          defaultValue={lang}
          inputProps={{ 'aria-label': 'Without label' }}
        >

          <MenuItem value={'ES'}> <img src="https://lovesongs.com/img/flags/spainflag.gif" style={{width:'28px'}}/></MenuItem>
          <MenuItem value={'EN'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" style={{width:'34px'}}/></MenuItem>
        </Select>
      </FormControl>
    
      </div>)
}
export default Lang