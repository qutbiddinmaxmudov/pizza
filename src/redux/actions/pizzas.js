import axios from "axios";
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  const sort = sortBy === "name" ? "asc" : "desc";
  axios
    .get(
      `https://${process.env.REACT_APP_API_ID}.mockapi.io/memory-game/pizzas?${
        category !== null ? `category=${category}` : ""
      }&sortBy=${sortBy}&order=${sort}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
  isLoaded: true,
});


