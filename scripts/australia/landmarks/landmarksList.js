import { getLandmarks } from './landmarksData.js'
import { landmark } from './landmarks.js'

export const landmarkList = () => {
    const landmarks = getLandmarks();
    const inputLocation = document.querySelector(".country_info--landmarks");
    landmarks.forEach(
        (landmarkObj) => {
            inputLocation.innerHTML += landmark(landmarkObj)
        }
    );
};