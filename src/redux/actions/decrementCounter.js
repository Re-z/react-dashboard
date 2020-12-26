import {reduxConstants} from "../constants";

export const decrementCounter = () => {
    return {
        type: reduxConstants.DECREMENT
    }
}
