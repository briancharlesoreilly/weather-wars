// Modules & Hooks
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import ComputerChoice from "./Components/ComputerChoice";
import PlayerChoice from "./Components/PlayerChoice";
import GetWeatherData from "./Components/GetWeatherData";

// Styles
import './App.css';


function App() {

  GetWeatherData();

  return (
    <div className="App">

      <header>
        <h1>Weather Wars</h1>
        <h2>Instructions</h2>
        <p>Instructions: The game is Weather Wars. There are 10 available fighters, each represented by the Capital City of each Province of our home and native land.</p>
        <p>The bloodthirsty and heartless AI known as Math Random will select a city for combat. Brave adventurer, you must choose a city to fight against the evil M. Rando in head to head combat. A victor will be decided based on the REAL TIME temperature difference between the two cities, delivered magically with the aid of a mysterious figure who goes by "AXIOS", associated with the secretive cabal simply known as "API".</p>
      </header>

      <main> {/* Main START */}


        <section className="fight-panel"> {/* fight panel section START */}
          <div className="computer-choice">
            <h3>
              Computer Chooses
              <ComputerChoice
              computerChoice="Toronto" 
              />
              <GetWeatherData 
              cityName="Toronto"
              />
            </h3>
          </div>
          <div className="player-choice">
            <h3>
              Player Chooses
              <PlayerChoice 
              cityName="Halifax"/>
            <GetWeatherData
              cityName="Halifax"
            />
            </h3>
          </div>

          <label htmlFor="province-select"></label>

          <select name="province-select" id="province-select">
            <option value=""> -- Choose a Fighter -- </option>
            <option value="british-colombia">British Colombia</option>
            <option value="alberta">Alberta</option>
            <option value="saskatchewan">Saskatchewan</option>
            <option value="manitoba">Manitoba</option>
            <option value="ontario">Ontario</option>
            <option value="quebec">Quebec</option>
            <option value="new-brunswick">New Brunswick</option>
            <option value="prince-edward-island">Prince Edward Island</option>
            <option value="nova-scotia">Nova Scotia</option>
            <option value="newfoundland">Newfoundland & Labrador</option>
          </select>

          <div>
            <label htmlFor="fight-submit"></label>
            <button type="submit" name="fight-submit" id="fight-submit">Fight!</button>
          </div>

        </section> {/* fight panel section END */}

      </main> {/* Main END */}

      <footer> {/* footer START */}
        <p>Made by Brian Charles O'Reilly for Juno College, © 2022</p>
      </footer> {/* footer END */}
    </div>
  );
}

export default App;
