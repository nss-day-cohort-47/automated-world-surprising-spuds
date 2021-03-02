import { getCitizens } from './citizenData.js'
import { Citizens } from './citizen.js'

export const citizenList = () => {
    const citizen = getCitizens()
    const inputLocation = document.querySelector(".country_info--citizens")
    citizen.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += Citizens(citizenObj)
        }
    );
};