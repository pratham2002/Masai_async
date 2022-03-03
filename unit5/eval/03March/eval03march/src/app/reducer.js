import { LOGIN } from "./actionTypes";
import { initState } from "./const";

const reducer = (state = initState, action) => {
  console.log("state", state, "type", action.type, "action", action);
  switch (action.type) {
    case "LOGIN": {
      console.log("loggedin");
      localStorage.setItem("login", true);
      return { ...state, isLoggedIn: true };
    }
    case "LOGOUT": {
      console.log("loggedOut");
      localStorage.removeItem("login");
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
};

export default reducer;
