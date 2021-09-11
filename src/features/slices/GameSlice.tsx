import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface GameTypes {
	board: string[]
	turn: string
	winner: string | null
	status: string
	players: string[]
}

const initialState: GameTypes = {
	board: Array(9).fill(''),
	turn: 'X',
	winner: null,
	status: 'created',
	players: ['', ''],
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setPlayers: (state, action: PayloadAction<string[]>) => {
			state.players = action.payload
		},
		setWinner: (state, action: PayloadAction<string>) => {
			state.winner = action.payload
		},
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload
		},
		setBoard: (state, action: PayloadAction<string[]>) => {
			state.board = action.payload
		},
		setTurn: (state, action: PayloadAction<string>) => {
			state.turn = action.payload
		},
	},

	extraReducers: (builder) => {},
})

export const { setPlayers, setWinner, setStatus, setBoard, setTurn } =
	gameSlice.actions

export const selectGameState = (state: RootState) => state.gameState

export default gameSlice.reducer
