// Hooks
import { useEffect, useState } from "react";
import axios from "axios";

// Modules
import { citiesList } from "../modules/citiesList";

// Take in player selected city choice
// find matching ID for that city in the array citiesList
// Store that ID number to search the API in GetWeatherData
const getCityID = (city) => {
  const findCityID = citiesList.find(e => e.city === city);
  return findCityID.id;
}

const apiKey = "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ";
const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";

  // API call to get weather data
const GetWeatherData = (props) => {
  const [playerSelection, setPlayerSelection] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // find ID of city for API search, add to searchURL
  const ID = getCityID(props.cityName);
  const searchURL = `${baseURL}${ID}`; 
  
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
      // store response data in variables for temperature, tempurature units (celsius or fahrenheit), and text description.
      const responseData = response.data;
      const temp = responseData[0].Temperature.Metric.Value;
      const tempUnit = responseData[0].Temperature.Metric.Unit;
      const tempText = responseData[0].WeatherText;
      // store these variables in an array 
      const combatDetailsPlayer = [temp, tempUnit, tempText];
      // set data into playerSelection state
      setPlayerSelection(combatDetailsPlayer);
      setLoading(false);
    })
  }, [props.cityName])

  const playerTemp = playerSelection[0];
  const playerTempUnit = playerSelection[1];
  const playerTempText = playerSelection[2];

  // if data has not been rec'd from API and no combat details have been set, return a LOADING message to the page...
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