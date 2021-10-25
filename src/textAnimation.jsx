import {useState,useEffect} from 'react'



const TextAnimated = () =>{
  const [actualColor, setActualColor]=useState('white')

    var [nameAnim,setNameAnim] = useState('')
    useEffect(()=>{

        typeEffect()
      },[])
    let name = "WELCOME TO MY PORTFOLIO"
  var i = 0
  let j = name.length
  const typeEffect3 = () =>{

    i = 0
    
    nameAnim = ''
    name= "<Alan Michelin/>"
    
    setTimeout(typeEffect, 200);
  }

  const typeEffect = () =>{

    if (i < name.length) {
      
      setNameAnim(nameAnim+=name.charAt(i))
      // if(name.charAt(i)==' '){
      //   setActualColor('yellow')
      // }
      i++;
      setTimeout(typeEffect, 200);
    }
    if(i==name.length){
      setTimeout(typeEffect2,200)
    }


  }
  
const typeEffect2 =() =>{
    
      if( j>=0){
      setNameAnim(nameAnim.slice(0,j))
      j--;
      console.log(j)
      setTimeout(typeEffect2,400)
      if(j===-1){
        typeEffect3()
      }
    }

}
return (
  <div style={{display:'block'}}>
    <h1 style={{fontSize:'8vw',fontFamily:['Roboto', 'monospace'] , fontWeight:400}}>{nameAnim}</h1>
    </div>
)}

export default TextAnimated
