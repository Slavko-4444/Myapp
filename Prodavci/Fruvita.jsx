import React,{ useState} from "react";
import "./Prodavci.css";
import Photo from "./Fruvita.png";

const Fruvita = (props) => {

    const {redniBroj} = props;

    return ( 
    <div className="Preduzetnik">
    <p className="Tekst">
    Naziv Preduzeca/Firme :Fruvita Prirodni Sokovi<br/> 
    Godina osnivanja: 1999.god.<br/>
    Vrse otkup voca/povrca: jabuka, malina..<br/>
    Nacin isplate: Gotovina<br/>
    <br/>
    <label for="kontakt" />Kontak tel. <label/><br/>
    <input type="text" id="Kontakt"/>
    <br/>
    <label for="kontakt1" />Prozivod koji biste plasirali: <label/><br/> 
    <input type="text" id="Kontakt1"/>
    <br/>
    
    <br/>
    {`${redniBroj}`}
    <br/><br/><br/>
    </p>
    <img className="Image" src={Photo} />
    </div>
    );
}
 
export default Fruvita;