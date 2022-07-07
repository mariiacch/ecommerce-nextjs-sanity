// se va a utilizar las cookies para guardar la opcion
//selecionada del usuario
import Cookies from "js-cookie";

// importo el reducer y context:
import { createContext, useReducer } from "react";

export const Store = createContext();

//defino el estado inicial:
//eel obj debe leer el darkMode desde cookies
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
};

//reducer

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children}</Store.Provider>;
}
