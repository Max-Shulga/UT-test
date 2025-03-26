import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "@/store/reducers";


const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export default store;
