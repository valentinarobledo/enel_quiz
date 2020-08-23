import React from "react";
import "./Quiz_styles.css";
import data from "../data";
import $ from 'jquery';
import hab1 from './hab1.png';
import hab2 from './hab2.png';
import hab3 from './hab3.png';
import hab4 from './hab4.png';
import hab5 from './hab5.png';
import hab6 from './hab6.png';

const Quiz  = ({...props})=> {
    const click = ()=>{
        var preguntas = document.getElementsByName("pregunta1");
        console.log(preguntas);
        for (var i=0; i<preguntas.length; i++){
            if(preguntas[i].checked){
                if(preguntas[i].value==0){
                   var e = document.getElementById("pregunta").remove();
                   var a = document.getElementById("radio").remove();
                   var bu = document.getElementById("button").remove();
                   var error = '<div class="titulo_incorrecto">INCORRECTO</div>';
                   $(".background").append(error);
                   var tip = '<div class="tip3">Busca tener presente siempre el significado de las 3 erres y procura aplicarlas siempre que puedas: Reduce, Reutiliza y Recicla  </div>';
                   $(".background").append(tip);
                   var next = '<div class="next3"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz3">SIGUIENTE</a></div>';
                   $(".background").append(next);
                }
                else{
                    data[2].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var bu = document.getElementById("button").remove();
                    var titulo = '<div class="titulo_correcto">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div class="tip3">Busca tener presente siempre el significado de las 3 erres y procura aplicarlas siempre que puedas: Reduce, Reutiliza y Recicla  </div>';
                   $(".background").append(tip);
                   var next = '<div class="next3"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz3">SIGUIENTE</a></div>';
                   $(".background").append(next);
                }
            }
        }
    }
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
             <div className="imagenes_quiz1">
                {imagen}
            </div>
            <div className="pregunta2" id="pregunta">
            En qué municipio está ubicado el parque solar más grande de Colombia desarrollado por Enel Green Power
            </div>
            <div className="radio2" id="radio">
                <input value="0" type="radio" name="pregunta1"/><label>El Triunfo, Cundinamarca </label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>El Colegio, Cundinamarca </label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>El Paso, Cesar</label>
            </div>
            <div id="button" className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz