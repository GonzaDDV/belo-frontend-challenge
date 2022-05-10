import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import coins from './slices/coins';
import swap from './slices/swap';

const rootReducer = {
	coins,
	swap,
};

export const store = configureStore({
	reducer: rootReducer,

	middleware: [thunkMiddleware],
});

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
