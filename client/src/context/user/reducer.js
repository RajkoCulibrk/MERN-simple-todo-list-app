export const initialState = {
  token: null,
  error: null,
  authenticated: false,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload,
      };
    case "LOAD_USER":
      return {
        ...state,
        user: { ...action.payload },
        token: null,
        authenticated: true,
      };
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
