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
                   var co = document.getElementById("caja").remove();
                   var error = '<div class="caja"><div class="titulo_incorrecto">INCORRECTO</div><div class="tip">Ya se trate de cerdo, res o aves, el proceso para llevarlos a tu mesa gasta una gran cantidad de energía </div><div class="next"><a href="#/finish" style="color:#93d4d7; text-decoration:none;">FINALIZAR</a></div></div>';
                   $(".background").append(error);
                }
                else{
                    data[5].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var bu = document.getElementById("button").remove();
                    var co = document.getElementById("caja").remove();
                   var tip = '<div class="caja"><div class="titulo_correcto">CORRECTO</div><div class="tip">Ya se trate de cerdo, res o aves, el proceso para llevarlos a tu mesa gasta una gran cantidad de energía </div><div class="next"><a href="#/finish" style="color:#93d4d7; text-decoration:none;">FINALIZAR</a></div></div>';
                   $(".background").append(tip);
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
            <div className="container_quiz1" id="caja">
                <div className="pregunta5" id="pregunta">
                ¿El Grupo Enel en Colombia ofrece más de 50 beneficios de Calidad de Vida para sus trabajadores, ¿cuáles de los siguientes hacen parte de ese listado?
                </div>
                <div className="radio5" id="radio">
                    <input value="0" type="radio" name="pregunta1"/><label>Día de balance (1 día libre cada 4 meses)</label><br></br>
                    <input value="0" type="radio" name="pregunta1"/><label>Jornada comprimida los viernes hasta las 2:00 p.m</label><br></br>
                    <input value="1" type="radio" name="pregunta1"/><label>Todas las anteriores</label>
                </div>
                <div id="button" className="button6" onClick={click}>SIGUIENTE</div>
            </div>
        </div>


    );
};
export default Quiz