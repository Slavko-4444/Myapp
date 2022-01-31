import React, { useEffect, useState } from "react";
import Mushroom from "./Prodavci/Mushroom";
import Radulovic from "./Prodavci/Radulovic";
import { useParams, useNavigate } from "react-router-dom";
import './Prodavci/Prodavci.css';
import Natural from "./Prodavci/Natural";
import Frutko from "./Prodavci/Frutko";
import Fruvita from "./Prodavci/Fruvita";   
import Fruits from "./Prodavci/Fruits";   
import Petrovic from "./Prodavci/Petrovic";   

const Otkupnik = () => {
    const{id} = useParams();
    const [ID,setID] = useState(id);
    const navigation = useNavigate();
    return ( 
    <div>
{(() => {
    {console.log(ID)}
    
    switch (ID) {
        
   case "1":

       return (
        <Mushroom redniBroj={ID}/>
       )

   case "2":

       return (

         <Radulovic redniBroj={ID}/>

       )
   case "3":
       return (
           <Natural redniBroj={ID}/>
       )
   case "4":
       return (
           <Frutko redniBroj={ID}/>
           )
   case "5":
       return (
           <Fruits redniBroj={ID}/>
           )
    
   case "6":
       return (
           <Petrovic redniBroj={ID}/>
           )
    
   
   case "7":
               return (
           <Fruvita redniBroj={ID}/>
       )
   default:

       return (

         <div>You are a User.</div>

       )

}
})()}

<button className="btnBack" onClick={()=>(navigation('/otkupnici'))}>Otkpunici</button>

</div>
     );
}
 
export default Otkupnik;