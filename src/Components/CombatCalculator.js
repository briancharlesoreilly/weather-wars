// Function that compares the values of player choice and computer choice temperatures and returns the winner. MVP goal is whichever temperature is higher is the winner.

import { useEffect, useState } from "react";
import GetWeatherData from "./GetWeatherData";


const CombatCalculator = (props) => {
const [combatMetrics, setCombatMetrics] = useState([]);

    console.log(props.metrics[0]);
    console.log(props.metrics[1]);

  return (
    <div className="combat-winner">
      <div>
        <p>{props.metrics[0]}</p>
      </div>
    </div>
  )

}

export default CombatCalculator;
