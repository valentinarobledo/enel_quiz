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
const hab_1 = hab1
const hab_2 = hab2
const hab_3 = hab3
const hab_4 = hab4
const hab_5 = hab5
const hab_6 = hab6
    
    const imagen = data.map((respuesta,i) => {
            return(
                <img style={{display:respuesta.correcto===0 ? "none":"block"}} className={"img" + (i+1)+"_quiz1"} src={eval("hab_"+(i+1))} alt="hab1"/>
            );
        });
    return(
        <div className="background">
            <div className="imagenes_finish">
                {imagen}
            </div>
            <div className="container">
                <div className="titulo">
                    Gracias por ayudar a iluminar este hogar
                </div>
                <div className="text">
                ¿Quieres saber como podemos construir un mundo más sostenible?
                </div>
                <div ><a className="a" href="http://consola-event.center/enel/registro/">Sí</a></div>
                <div ><a className="a" href="">No</a></div>
            </div>     
        </div>


    );
};
export default Finish