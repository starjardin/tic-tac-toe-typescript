import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface GameTypes {
	board: string[]
	turn: string
	winner: string | null
	status: string
	players: Players[]
	time: number
}

interface Players {
	name: string
	score: number
}

const initialState: GameTypes = {
	board: Array(9).fill(''),
	turn: 'X',
	winner: null,
	status: 'created',
	players: [
		{ score: 0, name: '' },
		{ score: 0, name: '' },
	],
	time: 5,
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setPlayers: (state, action: PayloadAction<Players[]>) => {
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
		setTime: (state, action: PayloadAction<number>) => {
			state.time = action.payload
		},
	},
})

export const { setPlayers, setWinner, setStatus, setBoard, setTurn, setTime } =
	gameSlice.actions

export const selectGameState = (state: RootState) => state.gameState

export default gameSlice.reducer
