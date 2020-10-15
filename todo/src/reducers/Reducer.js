
export const TODO_ITEM = "TODO_ITEM";

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };

export const Reducer = (state, action) => {
    switch (action.type) {
        case TODO_ITEM:
            return {...state, item: action.payload, completed: false,
            id: Date.now()};
        default:
            return state;
    }
};