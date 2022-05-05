// ***********************
// *** Modules & Hooks ***
// ***********************
import { useEffect, useState } from "react";
import axios from "axios";
import { citiesList } from "../modules/citiesList";

// The function below (getCityID) takes in a city name as a string (i.e. "Halifax", "Toronto", etc) and returns the unique ID for that city that we need for the API call.
const getCityID = (city) => {
  const findCityID = citiesList.find(e => e.city === city);
  return findCityID.id;
}

// API key and API Url for the axios call
const apiKey = "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ";
const baseURL = "https://dataservice.accuweather.com/currentconditions/v1/";

// API call to get weather data
const GetWeatherData = (props) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  // set error handling below when ready
  // const [error, setError] = useState("");

// find ID of city for API search, add to searchURL
  const ID = getCityID(props.cityName);
  const searchURL = `${baseURL}${ID}`; 
  
// API axios call inside a useEffect hook, with 1 dependency. This will run anytime the city name changes (props.cityName).
  useEffect(() => {
    axios({
      url: searchURL,
      method: "GET",
      params: {
        apikey: apiKey,
        language: "en-us",
        details: false,
      },
    }).then(response => {
      // store response data in variables for temperature, tempurature units (celsius or fahrenheit), and brief text description of the weather (i.e. "Light rain", "Mostly cloudy", etc).
      const responseData = response.data;
      const temp = responseData[0].Temperature.Metric.Value;
      const tempUnit = responseData[0].Temperature.Metric.Unit;
      const tempText = responseData[0].WeatherText;
      // store these variables in an array 
      const combatDetails = [temp, tempUnit, tempText];
      // set the array into playerSelection state
      setWeather(combatDetails);
      setLoading(false);
    })
  }, [searchURL])

  // save response data in variables in parent scope to use in the return section below
  const playerTemp = weather[0];
  const playerTempUnit = weather[1];
  const playerTempText = weather[2];

  // if data has not been rec'd from API and no combat details have been set, return a LOADING message to the page
  if(loading) {
    return (
      <div>
        <h3>LOADING COMBAT DATA</h3>
      </div>
    );
  }
  
  // if data HAS been recieved and combat details have been set...return a div and display the temperature and city name
  return (
    <div>
      <p>{`${playerTemp}°${playerTempUnit} and ${playerTempText}`}</p>
    </div>
  );
}
  
  export default GetWeatherData