import React, { useEffect, useState } from "react";
import {
  Cloudy,
  Moon,
  NightlyCloud,
  PartlySunny,
  Rain,
  StormRain,
  Sun,
} from "./../../assests/images/index";
import styles from "./WeatherImage.module.css";
function WeatherImage(props) {
  const [descriptionState, setDescriptionState] = useState("");
  let descriptonWeather = {
    day: { "clear sky": Sun, "few clouds": PartlySunny },
    night: { "clear sky": Moon, "few clouds": NightlyCloud },
    collective: {
      "scattered clouds": Cloudy,
      "broken clouds": Cloudy,
      "overcast clouds": Cloudy,
      "shower rain": Rain,
      "very heavy rain":Rain,
      "thunderstorm": StormRain,
    },
  };

  const getWeatherState = () => {
    let clock = new Date().getHours();
    var unix_timestamp= 1603475446;
    var date = new Date(unix_timestamp*1000)
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);



    if (clock > 6 && clock < 19) {
      if (
        descriptonWeather.day[props.weatherState] &&
        descriptonWeather.night[props.weatherState]
      ) {
        setDescriptionState(descriptonWeather.day[props.weatherState]);
      } else {
        setDescriptionState(descriptonWeather.collective[props.weatherState]);
      }
    } else {
      if (
        descriptonWeather.day[props.weatherState] &&
        descriptonWeather.night[props.weatherState]
      ) {
        setDescriptionState(descriptonWeather.night[props.weatherState]);
      } else {
        setDescriptionState(descriptonWeather.collective[props.weatherState]);
      }
    }
  };

  useEffect(() => {
    getWeatherState();
  }, [props.weatherState]);

  return (
    <div className={styles.weatherImg}>
      <img width="180" src={descriptionState} alt="" srcset="" />
    </div>
  );
}

export default WeatherImage;
