import React from "react";
import './index.css';

export default function BoxPrevisao() {
    const key = "b2c3ab1fa2db27ae393fb66df2dc4ac5";

    function showDatas(dadosApi){
        document.querySelector('.title-city').innerHTML = `Tempo em ${dadosApi.name}` ;
        document.querySelector('.p-celsius').innerHTML =  Math.floor(dadosApi.main.temp) + "°C";
        document.querySelector('.p-weather').innerHTML =  dadosApi.weather[0].description;
        document.querySelector('.humidity').innerHTML =  `Umidade: ${dadosApi.main.humidity} %`;
        document.querySelector('.img-icon').src = `https://openweathermap.org/img/wn/${dadosApi.weather[0].icon}.png`

    }
    
    async function connectApi(local){
        const dadosApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${key}&lang=pt_br&units=metric`).then(reply => reply.json());
        
        showDatas(dadosApi);
    }

    function clickButton(){
        const local = document.querySelector('.search-city').value;
    
        connectApi(local);
    }

    return (
        <div className="box-weather-main">
            <input className="search-city" placeholder="Digite o nome da cidade" />
            <button className="button-show-weather" onClick={clickButton}>
                <i class="bi bi-search"></i>
            </button>
            <div className="box-weather-second">
                <h2 className="title-city">Verifique sua cidade</h2>
                <p className="p-celsius">°C</p>
                <div className="box-flex-show">
                    <img src="https://openweathermap.org/img/wn/04n.png"  className="img-icon"/>
                    <p className="p-weather">Tempo</p>
                </div>
                <p className="humidity">Umidade: %</p>
            </div>
        </div>
    );
}