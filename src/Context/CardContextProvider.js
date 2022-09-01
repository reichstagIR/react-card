import React , {useReducer , createContext} from 'react';


const initialState = {
    selectedItems : [],
    itemCounter : 0,
    total : 0,
    checkOut : false,
}

export const CardContext = createContext([]);

const stateReducer = (state , action) => {
    const setTotal = () => {
        const total = state.selectedItems.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
        const itemCounter =  state.selectedItems.reduce((total , product) => total + product.quantity , 0);
        return {total , itemCounter};
    }
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload , quantity : 1});
            }
            return {
                ...state,
                checkOut: false,
                selectedItems : [...state.selectedItems],
                ...setTotal(),
            };
        case "REMOVE_ITEM":
            const newItems = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems.pop(newItems);
            return {
                ...state,
                ...setTotal(),
                selectedItems : [...state.selectedItems],
            };
        case "INCREASE":
            const increasable = state.selectedItems.find((item) => item.id === action.payload.id);
            increasable.quantity++;
            return {
                ...state,
                ...setTotal(),
            };
        case "DECREASE":
            const decreaseble = state.selectedItems.find((item) => item.id === action.payload.id);
            decreaseble.quantity--;
            return {
                ...state,
                ...setTotal(),
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

const CardContextProvider = (props) => {

    const [state , dispatch] = useReducer(stateReducer , initialState);

    return (
        <CardContext.Provider value={{state , dispatch}}>
            {props.children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
