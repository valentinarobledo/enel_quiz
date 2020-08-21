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
                    data[0].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style=" color:#93d4d7; font-weight:bold; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 530px; width:400px;margin-left: 500px;position: absolute;text-align: center;">Muchos trayectos no justifican el uso del automovil, ¿Por qué no mejorar de paso tu salud recurriendo más a la bicicleta? (Considera también el transporte público) </div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta" id="pregunta">
            ¿Cuál es la primera palabra en la que piensas cuando te hablan del GRUPO ENEL?
            </div>
            <div className="radio" id="radio">
                <input value="1" type="radio" name="pregunta1"/><label>Innovación</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Sostenibilidad</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Confianza</label><br></br>
                <input value="1"type="radio" name="pregunta1" /><label>Proactividad</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Desarrollo</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Ninguna</label><br></br>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz