import {state as reduxState} from "../state";
import {reduxConstants} from '../constants';

export const counterReducer = (state = reduxState, action) => {
    switch (action.type) {
        case(reduxConstants.INCREMENT): {
            return {
                ...state,
                counter: state.counter + 1,
            };
        }
        case(reduxConstants.DECREMENT): {
            return {
                ...state,
                counter: state.counter - 1,
            };
        }
        default:
            return state
    }
}