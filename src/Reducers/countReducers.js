import { ActionType } from "../constants/action-type"

const initialCount = {
    count: 0,
};

export const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case ActionType.INCREASE:
            return {
                count: state.count + 1,
            };
        case ActionType.DECREASE:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}
