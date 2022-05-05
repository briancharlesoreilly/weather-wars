// Importing flag images
import BC from "../images/british-columbia.jpg";
import AB from "../images/alberta.jpg";
import SK from "../images/saskatchewan.jpg";
import MB from "../images/manitoba.jpg";
import ON from "../images/ontario.jpg";
import QC from "../images/quebec.jpg";
import NB from "../images/new-brunswick.jpg";
import PEI from "../images/pei.jpg";
import NS from "../images/nova-scotia.jpg";
import NFLD from "../images/nfld.jpg";

// An Array of all available cities, their provinces, unique IDs, and flag images
// The unique IDs are required by the API to look up the weather data. 
export const citiesList = [
  { 
    city: "Vancouver",
    province: "British Colombia",
    id: 53286,
    img: <img src={BC} alt="Flag of British Colombia, Canada" />
  },
  {
    city: "Edmonton",
    province: "Alberta",
    id: 52478,
    img: <img src={AB} alt="Flag of Alberta, Canada" />
  },
  {
    city: "Regina",
    province: "Saskatchewan",
    id: 50335,
    img: <img src={SK} alt="Flag of Saskatchewan, Canada" />
  },
  {
    city: "Winnipeg",
    province: "Manitoba",
    id: 48989,
    img: <img src={MB} alt="Flag of Manitoba, Canada" />
  },
  {
    city: "Toronto",
    province: "Ontario",
    id: 55488,
    img: <img src={ON} alt="Flag of Ontario, Canada" />
  },
  {
    city: "Quebec City",
    province: "Quebec",
    id: 50011,
    img: <img src={QC} alt="Flag of Quebec, Canada" />
  },
  {
    city: "Fredericton",
    province: "New Brunswick",
    id: 1001,
    img: <img src={NB} alt="Flag of New Brunswick, Canada" />
  },
  {
    city: "Charlottetown",
    province: "Prince Edward Island",
    id: 1327,
    img: <img src={PEI} alt="Flag of Prince Edward Island, Canada" />
  },
  {
    city: "Halifax",
    province: "Nova Scotia",
    id: 49538,
    img: <img src={NS} alt="Flag of Nova Scotia, Canada" />
  },
  {
    city: "St. John's",
    province: "Newfoundland and Labrador",
    id: 49427,
    img: <img src={NFLD} alt="Flag of Newfoundland and Labrador, Canada" />
  },
  {
    city: "?",
    province: "?",
    id: 49538,
    img: <img src={null} alt="" />
  }
];
