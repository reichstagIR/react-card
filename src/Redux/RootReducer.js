import {combineReducers} from "redux";
import ProductsReducer from "./Products/ProductsReducer";
import CardReducer from "./Card/CardReducer";


const RootReducer = combineReducers({
    productsState : ProductsReducer,
    cardState : CardReducer,
});

export default RootReducer;