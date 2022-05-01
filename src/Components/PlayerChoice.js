// listen for radio button choice for player choice, pass here as props

// call the weather API and get weather data about the player choice
    // store this weathter data about computer choice, pass as props to the function that will decide the winner of the fight

    const PlayerChoice = (props) => {
      console.log("from player choice", props);
      const playerCityChoice = props.cityName; 
      return (
        <p>{playerCityChoice}</p>
      )
    }
    
    export default PlayerChoice