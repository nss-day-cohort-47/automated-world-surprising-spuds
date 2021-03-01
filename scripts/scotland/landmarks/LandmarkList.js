import { getLandmarks } from './LandmarkData.js'
import { Landmark } from './Landmark.js'

export const LandmarkList = () => {
    const landmarks = getLandmarks()
    const inputLocation = document.querySelector(".country_info--landmarks")
    cities.forEach(
        (landmarkObj) => {
            inputLocation.innerHTML += Landmark(landmarkObj)
        }
    );
};