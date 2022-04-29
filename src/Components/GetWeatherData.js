import { useEffect } from "react";
import axios from "axios";

  
const apiKey = "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ";

  // API call to get weather data for all provinces
  const GetWeatherData = () => {
    console.log("working?");

    useEffect(() => {
    axios({
      url: "http://dataservice.accuweather.com/currentconditions/v1/49538",
      method: "GET",
      params: {
        apikey: "oU28MIP77GV30LbR2diTL2ACEcTuAWoZ",
        language: "en-us",
        details: false,
      },
    }).then(response => {
      console.log(response);
      const responseData = response.data.results;
      console.log(responseData)
    })
  })

  }
  export default GetWeatherData