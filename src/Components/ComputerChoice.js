// create a math random function to randomly select from one of 10 Canadian cities.
    // store the information into a variable
    // display that information as teh "Computer Choice" to the page

// call the weather API and get weather data about the computer choice
    // store this weathter data about computer choice, pass as props to the function that will decide the winner of the fight

const ComputerChoice = (props) => {
  console.log("from computer choice", props);
  const computerCityChoice = props.computerChoice; 
  return (
    <p>{computerCityChoice}</p>
  )
}

export default ComputerChoice