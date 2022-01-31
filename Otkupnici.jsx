import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import './Otkupnici.css';
import MushromPhoto from './Prodavci/Ekopromet.jpg';
import RadulovciPhoto from'./Prodavci/Radulovic.jpg';
import NaturalPhoto from'./Prodavci/natural.jpg';
import FrutkoPhoto from'./Prodavci/frutko.jpg';
import FruvitaPhoto from './Prodavci/Fruvita.png';
import FruistPhoto from './Prodavci/frutis.jpg';
import PetrovicPhoto from './Prodavci/petrovic.jpg';
const Otkupnici = () => {
    
    const navigation = useNavigate();
    return ( 
    <>
    <br/>
    <br/>
    <p className="Naslov">
    Poslodavci i otkupnici na raspolaganju:
    </p>
    <br/>
    <br/>

    <div className="O">

    <button className="btnBack" onClick={()=>(navigation('/'))} >Početna</button>

    <div className="okviri" onClick={()=>navigation('/otkupnik/1')}>
   <p> Naziv Preduzeca/Firme: Mushroom Trade<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/></p>
    <img className="img"  src={MushromPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/2')}>
    Naziv Preduzeca/Firme :Radulovic Company<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={RadulovciPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/3')}>
    Naziv Preduzeca/Firme:All Natural<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={NaturalPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/4')}>
    Naziv Preduzeca/Firme:Frutko.doo<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={FrutkoPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/5')}>
    Naziv Preduzeca/Firme:Frutis Bijelo Polje<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={FruistPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/6')}>
    Naziv Preduzeca/Firme:Petrovic preduzeće za otkup povrća<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={PetrovicPhoto} />
    </div>
    <div className="okviri" onClick={()=>navigation('/otkupnik/7')}>
    Naziv Preduzeca/Firme: Fruvita Prirodni Sokovi<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    ...<br/>
    <img className="img"  src={FruvitaPhoto} />
    </div>
 
    </div>
    </>
     );
}
 
export default Otkupnici;