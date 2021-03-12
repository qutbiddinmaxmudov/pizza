const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

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
          totalPrice: currentPizzaItems[0].price * currentPizzaItems.length,
        },
      };

      const items = Object.values(newItems).map(obj => obj.items)
      const allItems = [].concat.apply([], items);
      
      const totalPrice = allItems.reduce((acc, obj) => acc + obj.price, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
