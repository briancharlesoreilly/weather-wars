// create a math random function to randomly select from one of 10 Canadian cities.
    // store the information into a variable
    // display that information as teh "Computer Choice" to the page

// call the weather API and get weather data about the computer choice
    // store this weathter data about computer choice, pass as props to the function that will decide the winner of the fight

// Modules
import { citiesList } from "../modules/citiesList";
import GetWeatherData from "./GetWeatherData";


const ComputerChoice = () => {
  // choose random city from array of capital cities for computer fighter choice
  const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)].city; 
  // display a p tag with the choice to the page
  return (
    <div>
      <p>{randomCity}</p>
      <GetWeatherData
      cityName= {randomCity}
      />
    </div>
  )
}

export default ComputerChoice