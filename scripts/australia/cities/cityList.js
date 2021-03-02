import { getCities } from './cityData.js'
import { city } from './city.js'

export const cityList = () => {
    const cities = getCities()
    const inputLocation = document.querySelector(".country_info--cities")
    cities.forEach(
        (cityObj) => {
            inputLocation.innerHTML += city(cityObj)
        }
    );
};