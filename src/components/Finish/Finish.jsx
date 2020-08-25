import React from "react";
import "./Finish.css";
import data from "../data";
import $ from 'jquery';
import hab1 from './hab1.png';
import hab2 from './hab2.png';
import hab3 from './hab3.png';
import hab4 from './hab4.png';
import hab5 from './hab5.png';
import hab6 from './hab6.png';

const Finish  = ({...props})=> {
    const click = ()=>{
        var e = document.getElementById("titulo_finish").remove();
        var a = document.getElementById("text_finish").remove();
        var bu = document.getElementById("options").remove();
        var co = document.getElementById("caja").remove();
        var info = '<div class="app"><div class="caja"><div class="info">¡Gracias por participar y recuerda los tips que te hemos dado para juntos construir un mundo más sostenible!</div></div></div>';
        $(".background").append(info);
    }
const hab_1 = hab1
const hab_2 = hab2
const hab_3 = hab3
const hab_4 = hab4
const hab_5 = hab5
const hab_6 = hab6
    
    const imagen = data.map((respuesta,i) => {
            return(
                <img width="830" height="380" style={{display:respuesta.correcto===0 ? "none":"block"}} className={"img_quiz1"} src={eval("hab_"+(i+1))} alt="hab6"/>
            );
        });
    return(
        <div className="background">
            <div className="app">
                <div className="img_container">
                    <div className="imagenes">
                        {imagen}
                    </div>
                </div>
                <div className="container_quiz1" id="caja">
                    <div className="titulo" id="titulo_finish">
                        Gracias por ayudar a iluminar este hogar
                    </div>
                    <div className="text" id="text_finish">
                    ¿Quieres saber como podemos construir un mundo más sostenible?
                    </div>
                    <div id="options">
                        <div ><a className="a" href="http://encuentroscolombia2020.com/registro/">Sí</a></div>
                        <div ><a className="a" onClick={click} >No</a></div>
                    </div>
                </div>    
            </div> 
        </div>


    );
};
export default Finish