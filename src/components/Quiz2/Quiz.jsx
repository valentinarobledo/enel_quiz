import React from "react";
import "./Quiz_styles.css";
import data from "../data";
import $ from 'jquery';

const Quiz  = ({...props})=> {
    const click = ()=>{
        var preguntas = document.getElementsByName("pregunta1");
        console.log(preguntas);
        for (var i=0; i<preguntas.length; i++){
            if(preguntas[i].checked){
                if(preguntas[i].value==0){
                   var e = document.getElementById("pregunta").remove();
                   var a = document.getElementById("radio").remove();
                   var error = '<div style="font-weight:bold; color:red; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">INCORRECTO</div>';
                   $(".background").append(error);
                }
                else{
                    data[2].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style=" color:#93d4d7; font-weight:bold; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 530px; width:400px;margin-left: 500px;position: absolute;text-align: center;">Busca tener presente siempre el significado de las 3 erres y procura aplicarlas siempre que puedas: Reduce, Reutiliza y Recicla  </div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta2" id="pregunta">
            En qué municipio está ubicado el parque solar más grande de Colombia desarrollado por Enel Green Power
            </div>
            <div className="radio2" id="radio">
                <input value="0" type="radio" name="pregunta1"/><label>El Triunfo, Cundinamarca </label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>El Colegio, Cundinamarca </label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>El Paso, Cesar</label>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz