// ***********************
// *** Modules & Hooks ***
// ***********************
import { useState } from "react";
import { citiesList } from "./modules/citiesList";
import { citiesListComputer } from "./modules/citiesListComputer";

// ***********************
// ***** Components ******
// ***********************
import ComputerChoice from "./Components/ComputerChoice";
import PlayerChoice from "./Components/PlayerChoice";

// ***********************
// ******* Styles ********
// ***********************
import './App.css';

function App() {


  // ***************************************
  // Declaring useStates used in main App.js
  // ***************************************
  const [cityChoice, setCityChoice] = useState("?");
  const [flag, setFlag] = useState("");
  const [randomCity, setRandomCity] = useState(citiesListComputer[Math.floor(Math.random() * citiesListComputer.length)].city);
  const [isActive, setActive] = useState(true);
  const [toggleResults, setToggleResults] = useState(false);
  const [showGame, setShowGame] = useState(false);

  // ***************************************
  // Some minor functions used within App.js
  // ***************************************
    // toggles between classes
  const ToggleClass = () => {
    setActive(!isActive);
  }
  const StartGame = () => {
    setShowGame(!showGame);
    console.log(showGame);
  }
    // return a flag image when given a city name
  const getFlagIMG = (city) => {
    const findFlagIMG = citiesList.find(e => e.city === city);
    return findFlagIMG.img;
  }

  return (
    <div className="App">

      <header> {/* Header START */}
        <div className="wrapper">
          <nav className="nav">
            <ul className="nav-ul">
              <li>
                <h1>Weather Wars</h1>
              </li>
              <li>
                <button className={isActive ? "button-hide" : "button-show"} onClick={ () => ToggleClass() }><p>Instructions</p></button>
              </li>
            </ul>
          </nav>
        </div>
        <section className="instructions"> {/* Instructions START */}
              <div className={isActive ? "instructions-active" : "instructions-inactive"}>
                <h2>Weather Wars!</h2>
                <p>The bloodthirsty and heartless AI known as <span className="math-random">Math Random</span> will select a Canadian capital city for combat. Brave adventurer, you must choose a city to fight back against the evil "M. Rando" in head to head combat.</p>
                <p>A mysterious figure who goes by "AXIOS", associated with the secretive cabal simply known as "API" will deliver <span>WEATHER RELATED</span> combat details and victory will be decided based on the REAL TIME temperature difference between the two cities.</p>
                <button onClick={ () => ToggleClass() }><p>Hide Instructions</p></button>
              </div>
            </section> {/* Instructions END */}
      </header> {/* Header END */}

      <main> {/* Main START */}
        <button
          className={!showGame ? "ready-button" : "ready-button-hide"}
          type="button"
          name="ready-button"
          onClick={ () => {
            setRandomCity(citiesListComputer[Math.floor(Math.random() * citiesListComputer.length)].city);
            StartGame();
            }}>
            <p>Start Game</p>
        </button>

        <div className="wrapper"> {/* main wrapper START */}
          <div className={showGame ? "flex-everything" : "flex-everything-hide"}>
            <section className={toggleResults ? "results" : "results-hide"} >
              <div className="results-flex">
                <div className="computer-results">
                  <ComputerChoice
                  computerCity={randomCity}
                  />
                </div>

                <div className="player-results">
                  <PlayerChoice 
                  cityName={cityChoice}
                  />
                </div>
              </div>

            </section>

            <section className="fight-panel"> {/* fight panel section START */}
              <div className="fight-panel-images">
                <div className="computer-choice-image">
                  <div className="computer-flag">
                    {getFlagIMG(randomCity)}
                  </div>
                </div>

                <div className="fight-start">
                  <label htmlFor="fight-submit"></label>
                  <button
                  className="verses"
                  type="submit"
                  name="fight-submit"
                  id="fight-submit"
                  onClick={ () => setToggleResults(!toggleResults) }
                  >
                    <p>Fight!</p>
                  </button>
                </div>

                <div className="player-choice-image">
                  {flag}
                </div>
              </div>

              <div className="fight-panel-info">
                <div className="computer-choice">
                  <p className="choose">Math Random chose</p>
                  <h3>{randomCity}</h3>
                </div>
                <div>
                  <p className="vs">Vs</p>
                </div>
                <div className="player-choice">
                  <p className="choose">You chose</p>
                  <h3>{cityChoice}</h3>
                </div>
              </div>

              <div className="choose-fighter">
                <label htmlFor="Vancouver">
                  <div className="choose"><p>Vancouver</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Vancouver"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[0].img);
                  }}
                  />
                  {citiesList[0].img}
                </label>

                <label htmlFor="Edmonton">
                  <div className="choose"><p>Edmonton</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Edmonton"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[1].img);
                  }}
                  />
                  {citiesList[1].img}
                </label>

                <label htmlFor="Regina">
                  <div className="choose"><p>Regina</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Regina"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[2].img);
                  }}
                  />
                  {citiesList[2].img}
                </label>

                <label htmlFor="Winnipeg">
                  <div className="choose"><p>Winnipeg</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Winnipeg"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[3].img);
                  }}
                  />
                  {citiesList[3].img}
                </label>

                <label htmlFor="Toronto">
                  <div className="choose"><p>Toronto</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Toronto"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[4].img);
                  }}
                  />
                  {citiesList[4].img}
                </label>

                <label htmlFor="Quebec City">
                  <div className="choose"><p>Quebec City</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Quebec City"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[5].img);
                  }}
                  />
                  {citiesList[5].img}
                </label>

                <label htmlFor="Fredericton">
                  <div className="choose"><p>Fredericton</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Fredericton"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[6].img);
                  }}
                  />
                  {citiesList[6].img}
                </label>

                <label htmlFor="Charlottetown">
                  <div className="choose"><p>Charlottetown</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Charlottetown"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[7].img);
                  }}
                  />
                  {citiesList[7].img}
                </label>

                <label htmlFor="Halifax">
                  <div className="choose"><p>Halifax</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="Halifax"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[8].img);
                  }}
                  />
                  {citiesList[8].img}
                </label>

                <label htmlFor="St. John's">
                  <div className="choose"><p>St. John's</p></div>
                  <input
                  type="radio"
                  name="fighter"
                  id="St. John's"
                  onClick={(e) => {
                    setCityChoice(e.target.id);
                    setFlag(citiesList[9].img);
                  }}
                  />
                  {citiesList[9].img}
                </label>
              </div>
            </section> {/* fight panel section END */}
          </div>
        </div> {/* main wrapper END */}
      </main> {/* Main END */}

      <footer> {/* footer START */}
        <div className="wrapper">
          <p>Made by Brian Charles O'Reilly for Juno College, © 2022</p>
        </div>
      </footer> {/* footer END */}
    </div>
  );
}

export default App;
