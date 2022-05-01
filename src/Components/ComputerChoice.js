// create a math random function to randomly select from one of 10 Canadian cities.
    // store the information into a variable
    // display that information as teh "Computer Choice" to the page

// call the weather API and get weather data about the computer choice
    // store this weathter data about computer choice, pass as props to the function that will decide the winner of the fight

// Modules
import { citiesList } from "../modules/citiesList";

const ComputerChoice = () => {

  const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)].city; 

  return (
    <p>{randomCity}</p>
  )
}

export default ComputerChoice