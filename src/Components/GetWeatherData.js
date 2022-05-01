// Hooks
import { useEffect, useState } from "react";
import axios from "axios";

// Modules
import { citiesList } from "../modules/citiesList";

// Take in player selection city choice
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
  // I DONT THINK I NEED TO SET STATE BELOW JUST A DESPERATE MOVE
  const [cityName, setCityName] = useState({});
  // find ID of city for API search, add to searchURL
  
  
  useEffect(() => {
    console.log("from GetWeatherData", props);
    
    // console.log("city Fucking Name");


  // NOTE, AS IT IS NOW. IF I RUN THE BELOW CODE WITH "Halifax", "Toronto", "Vancouver", etc in tthe getCityID function, it will return the same weather data for both times it is called in them ain page. If I run getCityID() with props.cityName and SAVE the react file, it will PROPERLY return the correct data for BOTH cities... however when I REFRESH the page IT ERRORS OUT?????

    const ID = getCityID("Halifax");
    const searchURL = `${baseURL}${ID}`; 

    axios({
      url: searchURL,
      method: "GET",
      params: {
        apikey: apiKey,
        language: "en-us",
        details: false,
      },
    }).then(response => {
      // store response data in variables
      const responseData = response.data;
      const temp = responseData[0].Temperature.Metric.Value;
      const tempUnit = responseData[0].Temperature.Metric.Unit;
      const tempText = responseData[0].WeatherText;
      const combatDetailsPlayer = [temp, tempUnit, tempText];

      // set data into playerSelection state
      setPlayerSelection(combatDetailsPlayer);
      setLoading(false);
    })
  }, [])

  const playerTemp = playerSelection[0];
  const playerTempUnit = playerSelection[1];
  const playerTempText = playerSelection[2];

  // console.log("player selection", playerSelection);

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
      <h3>{`${playerTemp}°${playerTempUnit} and ${playerTempText}`}</h3>
    </div>
  );
}
  
  export default GetWeatherData