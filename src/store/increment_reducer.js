const INCREMENT_ACTION = "incrementAction";
export const ASYNC_INCREMENT_ACTION = "asyncIncrementAction";

export const incrementReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT_ACTION:
            state += 1;
            break;
    }

    return state;
}

export const incrementActionCreator = () => {
    return {
        type: INCREMENT_ACTION
    }
}
export const asyncIncrementActionCreator = () => {
    return {
        type: ASYNC_INCREMENT_ACTION
    }
}