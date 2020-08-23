import React, {useState} from "react";
import "./Quiz1_styles.css";
import data from "../data";
import $ from 'jquery';
import hab1 from './hab1.png';
import hab2 from './hab2.png';
import hab3 from './hab3.png';
import hab4 from './hab4.png';
import hab5 from './hab5.png';
import hab6 from './hab6.png';

const Quiz1  = ({...props})=> {

    const click = ()=>{
        var preguntas = document.getElementsByName("pregunta1");
        console.log(preguntas);
        for (var i=0; i<preguntas.length; i++){
            if(preguntas[i].checked){
                if(preguntas[i].value===0){
                   var e = document.getElementById("pregunta").remove();
                   var a = document.getElementById("radio").remove();
                   var bu = document.getElementById("button").remove();
                   var error = '<div class="titulo_incorrecto">INCORRECTO</div>';
                   $(".background").append(error);
                   var tip = '<div class="tip2">Aunque no estes usando el cargador, si lo dejas conectado sigue consumiendo energía y contribuyendo al cambio climático, por eso los llaman vampiros de la energía. Lo mismo pasa con el resto de tus aparatos si los dejas conectados. La mejor opción es comprar barras multicontacto, así podrás desconectar todo de un solo movimiento    </div>';
                   $(".background").append(tip);
                   var next = '<div class="next2"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz2">SIGUIENTE</a></div>';
                   $(".background").append(next);
                }
                else{
                    data[1].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var a = document.getElementById("button").remove();
                    var titulo = '<div class="titulo_correcto">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div class="tip2">Aunque no estes usando el cargador, si lo dejas conectado sigue consumiendo energía y contribuyendo al cambio climático, por eso los llaman vampiros de la energía. Lo mismo pasa con el resto de tus aparatos si los dejas conectados. La mejor opción es comprar barras multicontacto, así podrás desconectar todo de un solo movimiento    </div>';
                   $(".background").append(tip);
                   var next = '<div class="next2"><a style="color:#93d4d7; text-decoration:none;" href="#/quiz2">SIGUIENTE</a></div>';
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

            <div className="pregunta1" id="pregunta">
            ¿Cuáles son los pilares del Grupo Enel para afrontar y aportar a la transformación energética?
            </div>
            <div className="radio1" id="radio">
                <input value="0" type="radio" name="pregunta1"/><label>Electricidad y digitalización</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Descarbonización y Urbanización</label><br></br>
                <input value="1"type="radio" name="pregunta1" /><label>Todas las anteriores</label><br></br>
            </div>
            <div id="button" className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz1