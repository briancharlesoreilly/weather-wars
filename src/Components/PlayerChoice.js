// listen for radio button choice for player choice, pass here as props

import GetWeatherData from "./GetWeatherData";

// call the weather API and get weather data about the player choice
    // store this weathter data about computer choice, pass as props to the function that will decide the winner of the fight

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