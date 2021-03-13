const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allItems = [].concat.apply([], items);

      const totalPrice = getTotalPrice(allItems);

      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice,
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    case "REMOVE_CART_ITEM": {
      const newItems = JSON.parse(JSON.stringify(...state.items));
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default cart;
