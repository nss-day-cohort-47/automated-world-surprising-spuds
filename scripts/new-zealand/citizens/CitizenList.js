import { getCitizens } from './CitizenData.js'
import { Citizens } from './Citizen.js'

export const citizenList = () => {
    const citizens = getCitizens()
    const inputLocation = document.querySelector(".country_info--citizens")
    citizens.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += Citizens(citizenObj)
        }
    )
};