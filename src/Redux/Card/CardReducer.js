const initialState = {
    selectedItems : [],
    itemCounter : 0,
    total : 0,
    checkOut : false,
}

const setTotal = (state) => {
    const total = state.selectedItems.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    const itemCounter =  state.selectedItems.reduce((total , product) => total + product.quantity , 0);
    return {total , itemCounter};
}

const stateReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload , quantity : 1});
            }
            return {
                ...state,
                checkOut: false,
                selectedItems : [...state.selectedItems],
                ...setTotal(state),
            };
        case "REMOVE_ITEM":
            const newItems = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems.pop(newItems);
            return {
                ...state,
                ...setTotal(state),
                selectedItems : [...state.selectedItems],
            };
        case "INCREASE":
            const increasable = state.selectedItems.find((item) => item.id === action.payload.id);
            increasable.quantity++;
            return {
                ...state,
                ...setTotal(state),
            };
        case "DECREASE":
            const decreaseble = state.selectedItems.find((item) => item.id === action.payload.id);
            decreaseble.quantity--;
            return {
                ...state,
                ...setTotal(state),
            };
        case "CHECKOUT":
            return {
                selectedItems : [],
                total: 0,
                itemCounter : 0,
                checkOut : true,
            };
        case "CLEAR":
            return {
                ...state,
                selectedItems : [],
                total: 0,
                itemCounter : 0,
                checkOut : false,
            };
        default:
            return state;
    }
}

export default stateReducer;