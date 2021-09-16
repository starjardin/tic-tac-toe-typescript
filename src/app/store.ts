import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import gameReducer from '../features/slices/GameSlice'

export const store = configureStore({
	reducer: {
		gameState: gameReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
