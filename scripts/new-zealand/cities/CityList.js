import { getCities } from './CityData.js';
import { City } from './City.js';

export const cityList = () => {
    const cities = getCities()
    const inputLocation = document.querySelector(".country_info--cities")
    cities.forEach(
        (cityObj) => {
            inputLocation.innerHTML += City(cityObj)
        }
    )
};