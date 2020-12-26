import {reduxConstants} from "../constants";

export const incrementCounter = () => {
    return {
        type: reduxConstants.INCREMENT
    }
}
