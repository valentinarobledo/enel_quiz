import React from "react";
import "./Quiz_styles.css";
import data from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const Quiz  = ({...props})=> {
    const click = ()=>{
        var preguntas = document.getElementsByName("pregunta1");
        console.log(preguntas);
        for (var i=0; i<preguntas.length; i++){
            if(preguntas[i].checked){
                if(preguntas[i].value===0){
                   var e = document.getElementById("pregunta").remove();
                   var a = document.getElementById("radio").remove();
                   var bu = document.getElementById("button").remove();
                   var co = document.getElementById("caja").remove();
                   var error = '<div class="caja"><div class="titulo_incorrecto">INCORRECTO</div><div class="tip">Muchos trayectos no justifican el uso del automovil, ¿Por qué no mejorar de paso tu salud recurriendo más a la bicicleta? (Considera también el transporte público) </div><div class="next"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz1">SIGUIENTE</a></div></div>';
                   $(".background").append(error);
                }
                else{
                    data[0].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var bu = document.getElementById("button").remove();
                    var co = document.getElementById("caja").remove();
                    var error = '<div class="caja"><div class="titulo_correcto">CORRECTO</div><div class="tip">Muchos trayectos no justifican el uso del automovil, ¿Por qué no mejorar de paso tu salud recurriendo más a la bicicleta? (Considera también el transporte público) </div><div class="next"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz1">SIGUIENTE</a></div></div>';
                   $(".background").append(error);
                   
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="container">
                <div className="container_quiz1" id="caja">
                    <div className="pregunta" id="pregunta">
                    ¿Cuál es la primera palabra en la que piensas cuando te hablan del GRUPO ENEL?
                    </div><br></br>
                    <div className="radio" id="radio">
                        <input value="1" type="radio" name="pregunta1"/><label>Innovación</label>
                        <input value="1" type="radio" name="pregunta1"/><label>Sostenibilidad</label><br></br>
                        <input value="1" type="radio" name="pregunta1"/><label>Confianza</label>
                        <input value="1"type="radio" name="pregunta1" /><label>Proactividad</label><br></br>
                        <input value="1" type="radio" name="pregunta1"/><label>Desarrollo</label>
                        <input value="0" type="radio" name="pregunta1"/><label>Ninguna</label><br></br>
                    </div>
                    <div id="button" className="button1" onClick={click}>SIGUIENTE</div>
                </div>
            </div>
        </div>


    );
};
export default Quiz

