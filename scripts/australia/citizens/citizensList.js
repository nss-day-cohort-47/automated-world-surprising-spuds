import { getCitizens } from './citizensData.js'
import { citizens } from './citizens.js'

export const citizenList = () => {
    const citizens1 = getCitizens()
    const inputLocation = document.querySelector(".country_info--citizens")
    citizens1.forEach(
        (citizenObj) => {
            inputLocation.innerHTML += citizens(citizenObj)
        }
    )
};