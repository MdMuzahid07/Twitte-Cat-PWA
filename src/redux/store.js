import reducer from "./reducers/reducer";

const { createStore } = require("redux");

const store = createStore(reducer);

export default store;