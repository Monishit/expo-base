import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import demoReducer from "./slice/demoSlice";

export const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "redux-",
  whitelist: [],
};

export const productPersistConfig = {
  key: "product",
  storage: AsyncStorage,
  keyPrefix: "redux-",
  whitelist: [""],
};

const rootReducer = combineReducers({
  demo: demoReducer,
});

export default rootReducer;
