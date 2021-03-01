import { getLandmarks } from './LandmarkData.js'
import { Landmark } from './Landmark.js'

export const LandmarkList = () => {
    const landmarks = getLandmarks()
    const inputLocation = document.querySelector(".country_info--landmark")
    cities.forEach(
        (cityObj) => {
            inputLocation.innerHTML += Landmark(landmarkObj)
        }
    );
};