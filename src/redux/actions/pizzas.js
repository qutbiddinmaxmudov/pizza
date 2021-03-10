import axios from "axios";
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  const sort = sortBy === "name" ? "asc" : "desc";
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=${sort}`
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
