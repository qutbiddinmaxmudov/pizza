import { combineReducers } from "redux";

import cartReducer from "./cart";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
  cart:cartReducer,
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
