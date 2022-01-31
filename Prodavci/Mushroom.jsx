import React,{ useState} from "react";
import "./Prodavci.css";
import Photo from "./Ekopromet.jpg";
const Mushroom = (props) => {

    const {redniBroj} = props;

    return ( 
    <div className="Preduzetnik">
    <p className="Tekst">
    Naziv Preduzeca/Firme: d.o.o. Ekopromet<br/><br/> 
    Godina osnivanja: 1999.god.<br/>    
    Vrse otkup voca/povrca:  jabuka, malina..<br/>
    Nacin isplate: Gotovina, mogucnosti pravljenja ugovora<br/><br/>
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
 
export default Mushroom;