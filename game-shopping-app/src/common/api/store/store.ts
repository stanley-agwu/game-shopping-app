import { PreloadedState, combineReducers, configureStore,  } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { gameApiService } from "../services/gameApiService";

const rootReducer = combineReducers({
  [gameApiService.reducerPath]: gameApiService.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => 
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApiService.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
