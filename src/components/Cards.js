
import React, { useState, useEffect } from 'react';
// import Overview from "./Overview";



const Cards = ()  => {

  
const [state, setState] = useState(
   {
    images: [
    {'id':1, 'src':'/images/bootstrap.png'},
    {'id':2, 'src':'/images/django.png'},
    {'id':3, 'src':'/images/flask.png'},
    {'id':4, 'src':'/images/git.png'},
    {'id':5, 'src':'/images/python.png'},
    {'id':6, 'src':'/images/react.png'},
    {'id':7, 'src':'/images/sql.png'},
    {'id':8, 'src':'/images/web.png'}
    
    ]

  });
  

 const [clicked, setClicked] = useState([]);
  const [count, setCount] = useState(1);


  var listimg = ['/images/bootstrap.png','/images/django.png','/images/flask.png','/images/git.png','/images/python.png','/images/react.png','/images/sql.png','/images/web.png']
var used = []
  const choseImage = e => {



  e.preventDefault()

  var src = e.target.src

if (!clicked.includes(src))

{

    setClicked([...clicked, src]);
    setCount(count + 1);

}

else if (clicked.includes(src))

{
    setClicked([]);
    setCount(1);

}


  var imgarray = document.querySelectorAll('.image')



 
  var rdm = ""



  for (let i=0; i<imgarray.length; i++)


  
{

    
  
    rdm = listimg[Math.floor(Math.random()*listimg.length)]

    while (used.includes(rdm) === true)

    {
        rdm = listimg[Math.floor(Math.random()*listimg.length)]

    } 
  

    imgarray[i].src = rdm
   

  }
}

var arrayrdm = [0,1,2,3,4,5,6,7]

var rdm = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index = arrayrdm.indexOf(rdm)

arrayrdm.splice(index, 1)

var rdm2 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index2 = arrayrdm.indexOf(rdm2)

arrayrdm.splice(index2, 1)


var rdm3 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index3 = arrayrdm.indexOf(rdm3)

arrayrdm.splice(index3, 1)

var rdm4 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index4 = arrayrdm.indexOf(rdm4)

arrayrdm.splice(index4, 1)

var rdm5 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index5 = arrayrdm.indexOf(rdm5)

arrayrdm.splice(index5, 1)

var rdm6 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index6 = arrayrdm.indexOf(rdm6)

arrayrdm.splice(index6, 1)

var rdm7 = arrayrdm[Math.floor(Math.random()*arrayrdm.length)]

var index7 = arrayrdm.indexOf(rdm7)

arrayrdm.splice(index7, 1)




var rdm8 = arrayrdm[0]





    return (

    
// mapper toutes les images aléatoirement
<div>
<div className='grid'>




<img className="image" src={state.images[rdm].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm2].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm3].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm4].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm5].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm6].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm7].src} onClick={choseImage} width="200px" height="200px"></img>
<img className="image" src={state.images[rdm8].src} onClick={choseImage} width="200px" height="200px"></img>


</div>


</div>

  // <button className="add" onClick={addHeader}>Add informations</button>

    );

    

  
}

export default Cards

