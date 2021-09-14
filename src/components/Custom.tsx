import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { selectGameState } from '../features/slices/GameSlice'

import {
	setWinner,
	setStatus,
	setBoard,
	setTurn,
	setPlayers,
} from '../features/slices/GameSlice'

interface ReturnValue {
	board: string[]
	status: string
	winner: string | null
	handleClick: (index: number) => void
	handleRestart: () => void
	handleStart: (players: Players[]) => void
	handleReboot: () => void
}

interface Players {
	name: string
	score: number
}

const Custom = (): ReturnValue => {
	const gameState = useAppSelector(selectGameState)
	const { board, turn, winner, players, status } = gameState

	const dispatch = useDispatch()

	useEffect(() => {
		if (status !== 'started') return
		const winningPositions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		let winningPositionsIndex = 0
		let winner: string | null = null

		while (winningPositionsIndex < winningPositions.length && !winner) {
			const boardPositionsToCheck = winningPositions[winningPositionsIndex]
			const boardValuesToCheck = boardPositionsToCheck.map(
				(index) => board[index]
			)
			const checkingValue = boardValuesToCheck[0]
			const isFinished = boardValuesToCheck.every(
				(value) => value === checkingValue && checkingValue
			)
			winner = !isFinished ? null : checkingValue
			winningPositionsIndex++
		}

		if (winner) {
			dispatch(setWinner(winner === 'X' ? players[0].name : players[1].name))
			dispatch(setStatus('finished'))
			return
		}
		dispatch(
			setStatus(board.filter((value) => !value).length ? 'started' : 'finished')
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [board, players, status])

	const handleClick = (index: number): void => {
		if (index < 0 || index > 9 || winner) return
		const newBoard = [...board]
		newBoard.splice(index, 1, turn)
		dispatch(setBoard(newBoard))
		const newTurn = turn === 'X' ? 'O' : 'X'
		dispatch(setTurn(newTurn))
	}

	const handleStart = (players: Players[]) => {
		dispatch(setPlayers(players))
		dispatch(setTurn('X'))
		dispatch(setStatus('started'))
	}
	const handleRestart = () => {
		dispatch(setBoard(Array(9).fill('')))
		dispatch(setWinner(''))
		dispatch(setStatus('restarted'))
		dispatch(
			setPlayers(
				players.map((e: any) => {
					if (e.name === winner) {
						return {
							...e,
							score: e.score + 1,
						}
					}
					return e
				})
			)
		)
	}
	const handleReboot = () => {
		dispatch(setBoard(Array(9).fill('')))
		dispatch(setWinner(''))
		dispatch(setStatus('created'))
	}

	return {
		board,
		status,
		winner,
		handleClick,
		handleRestart,
		handleStart,
		handleReboot,
	}
}

export default Custom
