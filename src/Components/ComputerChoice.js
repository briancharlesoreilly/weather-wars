// ***********************
// *** Modules & Hooks ***
// ***********************
import GetWeatherData from "./GetWeatherData";

const ComputerChoice = (props) => {

  return (
    <div>
      <p className="city-name">{props.computerCity}</p>
      <GetWeatherData
      cityName= {props.computerCity}
      />
    </div>
  )
}

export default ComputerChoice