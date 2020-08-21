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
                    data[4].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style=" color:#93d4d7; font-weight:bold; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 530px; width:400px;margin-left: 500px;position: absolute;text-align: center;">Los tenedores y los rack del secado son una opción amigable con el planeta. Las secadoras de rop producen gran cantidad de CO2, al no utilizarlas bajas el consumo de electricidad (y la cuenta), dejas de producir dióxido de carbono y además tienes al mejor aliado quitamanchas que existe: El sol   </div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta4" id="pregunta">
            ¿Cuál es la central hidroeléctrica de mayor capacidad de generación en Colombia, operada por Enel-Emgesa?
            </div>
            <div className="radio4" id="radio">
                <input value="1" type="radio" name="pregunta1"/><label>Guavio</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Quimbo</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Paraíso</label>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz