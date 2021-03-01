import { getCitizens } from './citizenData.js'
import { Citizen } from './citizen.js'

export const citizenList = () => {
    const citizens = getCitizens()
    const inputLocation = document.querySelector(".country_info--citizens")
    citizens.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += Citizen(citizenObj)
        }
    );
};