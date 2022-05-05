// Function that compares the values of player choice and computer choice temperatures and returns the winner. MVP goal is whichever temperature is higher is the winner.

import { useEffect, useState } from "react";
import axios from "axios";
import GetWeatherData from "./GetWeatherData";
import ComputerChoice from "./ComputerChoice";
import { citiesList } from "../modules/citiesList";


const CombatCalculator = (props) => {
const [combatMetrics, setCombatMetrics] = useState({});

console.log(props.metrics[0]);
console.log(props.metrics[1]);
console.log("FUCK", combatMetrics);

// GARBAGE STARTING HERE ****************************************
  const getCityID = (city) => {
    const findCityID = citiesList.find(e => e.city === city);
    return findCityID.id;
  }

  // API key and API Url for the axios call
  const apiKey = "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ";
  const baseURL = "https://dataservice.accuweather.com/currentconditions/v1/";

// API call to get weather data
  const GetCombatData = (cityName) => {
    const [combatData, setCombatData] = useState([]);
    const [loading, setLoading] = useState(true);

    // set error handling below when ready
    // const [error, setError] = useState("");

  // find ID of city for API search, add to searchURL
    const ID = getCityID(cityName);
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
        setCombatData(combatDetails);
        setLoading(false);
      })
    }, [searchURL])

    // save response data in variables in parent scope to use in the return section below
    const playerTemp = combatData[0];
    const playerTempUnit = combatData[1];
    const playerTempText = combatData[2];
};

// GetCombatData(props.metrics[0]);
// GARBAGE ENDING HERE ****************************************


// below CONSOLE LOGS the proper city names, must somehow get temperatures and return them to this function and check to see which one is higher, and return a "winner blah blah blah is higher temp"

  return (
    <div className="combat-winner">
      <div>
        <p>{props.metrics[0]}</p>
      </div>
    </div>
  )

}

export default CombatCalculator;
