import React from "react";
import "./Quiz1_styles.css";
import data from "../data";
import $ from 'jquery';

const Quiz1  = ({...props})=> {
    const click = ()=>{
        var preguntas = document.getElementsByName("pregunta1");
        console.log(preguntas);
        for (var i=0; i<preguntas.length; i++){
            if(preguntas[i].checked){
                if(preguntas[i].value==0){
                   var e = document.getElementById("pregunta").remove();
                   var a = document.getElementById("radio").remove();
                   var error = '<div style=" color:red; margin-top: 500px; width:400px;margin-left: 500px;position: absolute;text-align: center;">INCORRECTO</div>';
                   $(".background").append(error);
                }
                else{
                    data[1].correcto=1;
                    var e = document.getElementById("pregunta").remove();
                    var a = document.getElementById("radio").remove();
                    var titulo = '<div style="font-weight:bold; color:#93d4d7; font-weight:bold; margin-top: 490px; width:400px;margin-left: 500px;position: absolute;text-align: center;">CORRECTO</div>';
                    $(".background").append(titulo);
                    var tip = '<div style=" color:white; margin-top: 510px; width:400px;margin-left: 500px;position: absolute;text-align: center;">Aunque no estes usando el cargador, si lo dejas conectado sigue consumiendo energía y contribuyendo al cambio climático, por eso los llaman vampiros de la energía. Lo mismo pasa con el resto de tus aparatos si los dejas conectados. La mejor opción es comprar barras multicontacto, así podrás desconectar todo de un solo movimiento    </div>';
                   $(".background").append(tip);
                }
            }
        }
    }
    return(
        <div className="background">
            <div className="pregunta1" id="pregunta">
            ¿Cuáles son los pilares del Grupo Enel para afrontar y aportar a la transformación energética?
            </div>
            <div className="radio1" id="radio">
                <input value="0" type="radio" name="pregunta1"/><label>Electricidad y digitalización</label><br></br>
                <input value="0" type="radio" name="pregunta1"/><label>Descarbonización y Urbanización</label><br></br>
                <input value="1"type="radio" name="pregunta1" /><label>Todas las anteriores</label><br></br>
            </div>
            <div className="button" onClick={click}>SIGUIENTE</div>
        </div>


    );
};
export default Quiz1