import { useState } from 'react';
import { data,} from './data';
import photo from './dress.gpg.webp';
import dress from './dress.webp';
import './App.css';

function App() {

const[outfits,setOutfit]= useState(data);
const removeOutfit =(id)=>{
  let newOutfit= outfits.filter(outfit => outfit.id !==id);
   setOutfit(newOutfit)
}
  return (

<div>
    <div className='container'>
      <h1>Was trage ich zu einem Date ?Hier  {outfits.length} Outfits zur Auswahl</h1>
    </div>

    <div className="header">
    <img src={dress}width="500px"alt="dress"/>
      <img src={photo}width="500px"alt="dress"/>
      </div>
    {outfits.map((element=>{
      const {id,outfit,description,image,} = element;
      return(
        <div key={id}>
          <div className="heading">
          <h2>{id} 👠 {outfit}</h2>
          </div>

          <div className="heading">
            <img src={image}width="500px"/>
          </div>

          <div className="heading">
            <button onClick={()=>removeOutfit(id)}>Löschen</button>
          </div>

        </div>

      )
    }))}
    <div className='heading'>

    <button onClick={()=>setOutfit([])}>Alles Löschen</button>
    </div>
   </div>
   
  );
}

export default App;
