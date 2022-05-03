// ***********************
// *** Modules & Hooks ***
// ***********************
import { useState } from "react";
import { citiesList } from "./modules/citiesList";

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
  const [fighterChoice, setFighterChoice] = useState("Halifax");
  const [flag, setFlag] = useState("");
  const [randomCity, setRandomCity] = useState(citiesList[Math.floor(Math.random() * citiesList.length)].city);
  const [isActive, setActive] = useState(false);

  // ***************************************
  // Some minor functions used within App.js
  // ***************************************
    // toggles between classes
  const ToggleClass = () => {
    setActive(!isActive);
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
          <h1>Weather Wars</h1>
        </div>
      </header> {/* Header END */}

      <main> {/* Main START */}
        <div className="wrapper"> {/* main wrapper START */}
          <section className="instructions">
            <div className={isActive ? "instructions-active" : "instructions-inactive"}>
              <h2>How To Play</h2>
              <p>The game is Weather Wars. There are 10 available fighters, each represented by the Capital City of each Province of our home and native land.</p>
              <p>The bloodthirsty and heartless AI known as Math Random will select a city for combat. Brave adventurer, you must choose a city to fight against the evil M. Rando in head to head combat. A victor will be decided based on the REAL TIME temperature difference between the two cities, delivered magically with the aid of a mysterious figure who goes by "AXIOS", associated with the secretive cabal simply known as "API".</p>
            </div>

            <button onClick={ () => ToggleClass() }>Tutorial</button>

          </section>

          <section className="fight-panel"> {/* fight panel section START */}

            <div className="fight-panel-images">
              <div className="computer-choice-image">
                {getFlagIMG(randomCity)}
              </div>

              <div className="player-choice-image">
                {flag}
              </div>
            </div>

            <div className="fight-panel-info">
              <div className="computer-choice">
                <h3>Computer Chooses</h3>
                <ComputerChoice
                computerCity={randomCity}
                />
              </div>
              <div className="player-choice">
                <h3>Player Chooses</h3>
                  <PlayerChoice 
                  cityName={fighterChoice}/>
              </div>
            </div>

            <div className="choose-fighter">
              <label htmlFor="Vancouver">
                <div className="choose">Vancouver</div>
                <input
                type="radio"
                name="fighter"
                id="Vancouver"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[0].img);
                }}
                />
                {citiesList[0].img}
              </label>

              <label htmlFor="Edmonton">
                <div className="choose">Edmonton</div>
                <input
                type="radio"
                name="fighter"
                id="Edmonton"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[1].img);
                }}
                />
                {citiesList[1].img}
              </label>

              <label htmlFor="Regina">
                <div className="choose">Regina</div>
                <input
                type="radio"
                name="fighter"
                id="Regina"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[2].img);
                }}
                />
                {citiesList[2].img}
              </label>

              <label htmlFor="Winnipeg">
                <div className="choose">Winnipeg</div>
                <input
                type="radio"
                name="fighter"
                id="Winnipeg"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[3].img);
                }}
                />
                {citiesList[3].img}
              </label>

              <label htmlFor="Toronto">
                <div className="choose">Toronto</div>
                <input
                type="radio"
                name="fighter"
                id="Toronto"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[4].img);
                }}
                />
                {citiesList[4].img}
              </label>

              <label htmlFor="Quebec City">
                <div className="choose">Quebec City</div>
                <input
                type="radio"
                name="fighter"
                id="Quebec City"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[5].img);
                }}
                />
                {citiesList[5].img}
              </label>

              <label htmlFor="Fredericton">
                <div className="choose">Fredericton</div>
                <input
                type="radio"
                name="fighter"
                id="Fredericton"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[6].img);
                }}
                />
                {citiesList[6].img}
              </label>

              <label htmlFor="Charlottetown">
                <div className="choose">Charlottetown</div>
                <input
                type="radio"
                name="fighter"
                id="Charlottetown"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[7].img);
                }}
                />
                {citiesList[7].img}
              </label>

              <label htmlFor="Halifax">
                <div className="choose">Halifax</div>
                <input
                type="radio"
                name="fighter"
                id="Halifax"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[8].img);
                }}
                />
                {citiesList[8].img}
              </label>

              <label htmlFor="St. John's">
                <div className="choose">St. John's</div>
                <input
                type="radio"
                name="fighter"
                id="St. John's"
                onClick={(e) => {
                  setFighterChoice(e.target.id);
                  setFlag(citiesList[9].img);
                }}
                />
                {citiesList[9].img}
              </label>

            </div>

            <div className="fight-start">
              <label htmlFor="fight-submit">
                <button type="submit" name="fight-submit" id="fight-submit">Fight!</button>
              </label>
            </div>

          </section> {/* fight panel section END */}
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
