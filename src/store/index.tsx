import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// Reducer
import routeReducer from './slices/route';
import loginReducer from './slices/login';

// Api
import {homeApi} from './api/home';

const rootReducer = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  route: routeReducer,
  login: loginReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 1000,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 1000,
      },
    }).concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Redux hooks with types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
