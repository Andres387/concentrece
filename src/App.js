import React from 'react';
import './App.css';
import JeisonPictures from './Components/JeisonPictures';
// import './Components/Card/Card.css';
var carta1 = null;
var carta1Value = null;//primerResultado
var carta2 = null;
var carta2Value =null;
let movimientos =0;
let aciertos=0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;
let pares = 0;
let parejasDescubiertas = 0;
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo;

// import React, { useState, useEffect } from 'react';







let numbers = [1,5,2,6,3,0,4,7,5,1,6,2,7,3,4,0]
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log (numbers);


function App () {


    const ContadorTiempo = () => {
        
    };
    
    const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    const tiempoRegresivoId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    if (timer === 0)
    return () => {
      clearInterval(tiempoRegresivoId);
    };
  }, []);

  React.useEffect(() => {
    mostrarTiempo = document.getElementById('t-restante');
        if(mostrarTiempo)
            {mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`};
        if (timer === 0) {
            clearInterval(tiempoRegresivoId);
    }
  }, [timer]); // Dependencia timer para ejecutar el efecto cuando timer cambia




    React.useEffect(() => {
        for (let i = 0; i < 16; i++) {
        //   console.log(i);
          const element = document.getElementById(i);
          if (element) {
            const image = element.querySelector(`.detras img`);
            image.src = JeisonPictures[numbers[i]].img;
            // console.log(image,);
          }
        }
      }, []);

    

    function destape (id) {
        if(temporizador == false){
            ContadorTiempo();
            temporizador = true;
        }
        
        let carta = document.getElementById(id)
        if(carta !== null) {
            carta.classList.add("volteo")
            carta.style.pointerEvents = "none";
            parejasDescubiertas++;
            //console.log(parejasDescubiertas);
            if(parejasDescubiertas == 1){

                carta1 = numbers;
                carta1Value = numbers[id];
                carta1.innerHTML=carta1Value;
        
                carta1.disabled = true;
            }

        }
        
    }
    return (
    <div className="App">
        <main>
            <div className="section1">
                    <div className="row">
                        <div onClick={()=> destape(0)} id="0" className="carta-box">
                                        <div id="volteo" className="carta">
                                            <div className="cara detras">
                                                <img src={JeisonPictures[0].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(1)} id="1" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[1].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(2)} id="2" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[2].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(3)} id="3" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[3].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={()=> destape(4)} id="4" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[4].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(5)} id="5" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[5].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(6)} id="6" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[6].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(7)} id="7" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[7].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={()=> destape(8)} id="8" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[0].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(9)} id="9" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[1].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(10)} id="10" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[2].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(11)} id="11" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[3].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={()=> destape(12)} id="12" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[4].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(13)} id="13" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[5].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(14)} id="14" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[6].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                        <div onClick={()=> destape(15)} id="15" className="carta-box">
                                        <div id="volteo" className="carta">    
                                            <div className="cara detras">
                                                <img src={JeisonPictures[7].img}/>
                                            </div>
                                            <div className="cara">
                                                <img src={JeisonPictures[8].img}/>
                                            </div>    
                                        </div>
                        </div>
                    </div>
            </div>
                    
            <section className="section2">
                <h2 id="aciertos" className="estadisticas">Aciertos: 0</h2>
                <h2 id="t-restante"className="estadisticas">{`Tiempo: ${timer} segundos`}</h2>
                <h2 id="movimientos"className="estadisticas">Movimientos: 0</h2>
            </section>
            
        </main>
        <footer>
            <p> Juego programado por <a href="www.molinasgroupdevelper.com">Andres Molina</a></p>
        </footer>
    </div>
  );
}

export default App;



