// Hooks
import { useEffect, useState } from "react";
import axios from "axios";

// Modules
import { citiesList } from "../modules/citiesList";

const apiKey = "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ";

// Take in player selection city choice
// find matching ID for that city in the array citiesList
// Store that ID number to search the API in GetWeatherData
const getCityID = () => {
  // console.log(citiesList);
}

  // API call to get weather data for all provinces
const GetWeatherData = () => {
  const [playerSelection, setPlayerSelection] = useState([]);

  useEffect(() => {
    axios({
      url: "http://dataservice.accuweather.com/currentconditions/v1/49538",
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

      // console.log("combat details player", combatDetailsPlayer);
      // set data into playerSelection state
      setPlayerSelection(combatDetailsPlayer);
    })
  }, [])

  console.log(playerSelection);
  console.log("Temperature", playerSelection[0]);
  const playerTemp = playerSelection[0];
  const playerTempUnit = playerSelection[1];
  const playerTempText = playerSelection[2];

  // console.log("player selection", playerSelection.Metric);
  // const playerTemp = playerSelection.Metric;
  // console.log("temp object", playerTemp);
  // const playerTempUnit = playerSelection.Metric.Unit;
  // const playerCombatReady = `${playerTemp}${playerTempUnit}`;
  // console.log("Player Selection", playerSelection);
  // console.log("Combat Ready Data Info", playerCombatReady);

    // WORKING REFERENCE HTML
    // return a div and display the temperature and city name
  return (
    <div>
      <h3>Halifax is {`${playerTemp}°${playerTempUnit} and ${playerTempText}`}</h3>
    </div>
  );
}
  

  export default GetWeatherData