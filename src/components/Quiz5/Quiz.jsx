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
                    data[5].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style=" color:#93d4d7; font-weight:bold; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 550px; width:400px;margin-left: 500px;position: absolute;text-align: center;">Ya se trate de cerdo, res o aves, el proceso para llevarlos a tu mesa gasta una gran cantidad de energía </div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta5" id="pregunta">
            ¿El Grupo Enel en Colombia ofrece más de 50 beneficios de Calidad de Vida para sus trabajadores, ¿cuáles de los siguientes hacen parte de ese listado?
            </div>
            <div className="radio5" id="radio">
                <input value="1" type="radio" name="pregunta1"/><label>Día de balance (1 día libre cada 4 meses)</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Jornada comprimida los viernes hasta las 2:00 p.m</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Todas las anteriores</label>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz