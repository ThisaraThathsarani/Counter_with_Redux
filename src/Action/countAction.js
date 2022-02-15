import { ActionType } from "../constants/action-type"

export const setIncreaseCounter = () => {
    return {
        type: ActionType.INCREASE,
        payload: "increase",
    };
};

export const setDecreaseCounter = () => {
    return {
        type: ActionType.DECREASE,
        payload: "decrease",
    };
};
