// ***********************
// *** Modules & Hooks ***
// ***********************
import GetWeatherData from "./GetWeatherData";

// Takes in player choice data from props, passes it to GetWeatherData() to call API and returns city name and weather information.
    const PlayerChoice = (props) => {
      const playerCityChoice = props.cityName; 
      return (
        <>
          <p>{playerCityChoice}</p>
          <GetWeatherData
          cityName= {playerCityChoice}
          />
        </>
      )
    }
    
    export default PlayerChoice