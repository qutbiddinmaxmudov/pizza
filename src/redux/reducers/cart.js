const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => val[key], obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    return sum + _get(obj, path);
  }, 0);
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
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        totalCount,
        totalPrice,
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }
    case "PLUS_CART_ITEM": {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        totalCount,
        totalPrice,
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }
    case "REMOVE_CART_ITEM":
      const newItems = JSON.parse(JSON.stringify(state.items));
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    default:
      return state;
  }
};

export default cart;
