import { citiesList } from "../modules/citiesList";

const GetCityID = (city) => {
  const findCityID = citiesList.find(e => e.city === city);
  return findCityID.id;
}

export default GetCityID