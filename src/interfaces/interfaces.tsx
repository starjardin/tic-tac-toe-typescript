export interface ReturnValue {
	board: string[]
	status: string
	winner: string | null
	handleClick: (index: number) => void
	handleRestart: () => void
	handleStart: (players: Players[]) => void
	handleReboot: () => void
	seconds: number
	minutes: number
	hours: number
	restartTime: () => void
}

export interface Players {
	name: string
	score: number
}

export interface GameTypes {
	board: string[]
	turn: string
	winner: string | null
	status: string
	players: Players[]
	time: number
}

export interface Players {
	name: string
	score: number
}
