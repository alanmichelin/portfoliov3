import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
import { InputLabel } from '@mui/material';

const Lang =({selectLanguage,content}) =>{
    const [lang, setLang] = useState('ES');
    const handleChange = (event) => {
        setLang(event.target.value);
      };
    useEffect(()=>{
        selectLanguage(lang)
    },[lang])

 
    return(

    <div style={{display:'flex', alignItems:'center'}}>
       
      <p style={{fontFamily:'"Roboto","Helvetica","Arial",sans-serif', fontSize:'14px'}}>{content.toUpperCase()}</p>
      <FormControl >
        <InputLabel /> 
        <Select

          value={lang}
          onChange={handleChange}
          defaultValue={lang}

          style={{minHeight:'50px'}}


        >

          <MenuItem value={'ES'}> <img src="https://lovesongs.com/img/flags/spainflag.gif" style={{width:'28px'}}/></MenuItem>
          <MenuItem value={'EN'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" style={{width:'34px'}}/></MenuItem>
        </Select>
      </FormControl>
    
      </div>)
}
export default Lang