import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { Location, Temp, Weather, WeatherImage, ThemeBtn } from "../index";

const API = process.env.REACT_APP_WEATHER_API_KEY;




function Search(props) {


  const [location, setLocation] = useState("Turkey");
  const [weather, setweather] = useState({});

  
  //&units=metric&lang=tr&APPID=
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setweather(data);
      
      });
  }, [location]);



  
  return (
    <div  >
     
      {typeof weather.main != "undefined" ? 
      (<div className={styles.search}>
     
      <Temp temp={Math.round(weather.main.temp)}/>
      <Weather weatherState={[weather.weather[0].description]}   />
      <WeatherImage weatherState={weather.weather[0].description} />
      <Location location={[weather.name, weather.sys.country]} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setLocation(e.target.value)}
        />
      {/* <ThemeBtn /> */}
      </div>)
      :
      (
       <div className={styles.search}>
         
       <Temp temp={0} />
       <Weather />
       <WeatherImage />
       <Location location={["Türkiye","TR"]} />
       <input
         type="text"
         placeholder="Search..."
         onChange={(e) => setLocation(e.target.value)}
         />
       {/* <ThemeBtn /> */}
       </div>
      )}
      
    </div>
  );
}

export default Search;
