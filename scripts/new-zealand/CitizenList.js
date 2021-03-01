import { getCitizens } from './citizenData.js'
import { Citizens } from './citizen.js'

export const citizenList = () => {
    const citizens = getCitizens()
    const inputLocation = document.querySelector(".country_info--citizens")
    citizens.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += Citizens(citizenObj)
        }
    );
};