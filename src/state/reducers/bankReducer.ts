import { Action } from "../actions/action";

const intialState =0;



const reducer= (state :number =intialState ,action: Action) => {
    switch (action.type){
        case "deposit":
            return state + action.payload;

        case "withdraw":
            return state - action.payload;

        case "bankcrupt":
            return 0;

        default:
            return state;
    }
}

export default reducer;