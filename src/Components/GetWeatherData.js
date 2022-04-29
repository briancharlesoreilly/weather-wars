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
  // find ID of city for API search, add to searchURL
  console.log(props);
  // const name = props.cityName;
  // console.log("name", name)
  // const { cityName } = props;
  const ID = getCityID("Halifax");
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
      // store response data in variable
      const responseData = response.data;
      const temp = responseData[0].Temperature.Metric.Value;
      const tempUnit = responseData[0].Temperature.Metric.Unit;
      const tempText = responseData[0].WeatherText;
      const combatDetailsPlayer = [temp, tempUnit, tempText];

      // set data into playerSelection state
      setPlayerSelection(combatDetailsPlayer);
    })
  }, [])

  const playerTemp = playerSelection[0];
  const playerTempUnit = playerSelection[1];
  const playerTempText = playerSelection[2];

  // console.log("player selection", playerSelection);

    // WORKING REFERENCE HTML
    // return a div and display the temperature and city name
  return (
    <div>
      <h3>Halifax is {`${playerTemp}°${playerTempUnit} and ${playerTempText}`}</h3>
    </div>
  );
}
  
  export default GetWeatherData