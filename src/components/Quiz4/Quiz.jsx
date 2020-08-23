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
                   var tip = '<div class="tip5">Los tenedores y los rack del secado son una opción amigable con el planeta. Las secadoras de rop producen gran cantidad de CO2, al no utilizarlas bajas el consumo de electricidad (y la cuenta), dejas de producir dióxido de carbono y además tienes al mejor aliado quitamanchas que existe: El sol   </div>';
                   $(".background").append(tip);
                   var next = '<div class="next5"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz5">SIGUIENTE</a></div>';
                   $(".background").append(next);
                }
                else{
                    data[4].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var bu = document.getElementById("button").remove();
                    var titulo = '<div class="titulo_correcto">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div class="tip5">Los tenedores y los rack del secado son una opción amigable con el planeta. Las secadoras de rop producen gran cantidad de CO2, al no utilizarlas bajas el consumo de electricidad (y la cuenta), dejas de producir dióxido de carbono y además tienes al mejor aliado quitamanchas que existe: El sol   </div>';
                   $(".background").append(tip);
                   var next = '<div class="next5"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz5">SIGUIENTE</a></div>';
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
            <div className="pregunta4" id="pregunta">
            ¿Cuál es la central hidroeléctrica de mayor capacidad de generación en Colombia, operada por Enel-Emgesa?
            </div>
            <div className="radio4" id="radio">
                <input value="1" type="radio" name="pregunta1"/><label>Guavio</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Quimbo</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Paraíso</label>
            </div>
            <div  id="button" className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz