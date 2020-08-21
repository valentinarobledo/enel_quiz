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
                    data[3].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style=" color:#93d4d7; font-weight:bold; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 530px; width:400px;margin-left: 500px;position: absolute;text-align: center;">El exceso de bolsas de plástico y empaques, así como mantener el congelador con hielo, hace que tu aparato necesite más potencia para enfriar, y con ello gasta más electricidad.</div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta3" id="pregunta">
            Cómo se llama el dron utilizado por Enel-Codensa en su operación para eliminar elementos extraños en la red
            </div>
            <div className="radio3" id="radio">
                <input value="0" type="radio" name="pregunta1"/><label>Dron Luciérnaga</label><br></br>
                <input value="1" type="radio" name="pregunta1"/><label>Dron Dragón</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Dron destructor</label><br></br>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz