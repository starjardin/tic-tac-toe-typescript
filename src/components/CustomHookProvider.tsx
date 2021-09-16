import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { selectGameState } from '../features/slices/GameSlice'
import { ReturnValue, Players } from '../interfaces/interfaces'
import { winningPositions } from '../constant'

import {
	setWinner,
	setStatus,
	setBoard,
	setTurn,
	setPlayers,
} from '../features/slices/GameSlice'

const CustomHookProvider = (): ReturnValue => {
	const { board, turn, winner, players, status, time } =
		useAppSelector(selectGameState)

	const dispatch = useDispatch()

	const expiryTimestamp = new Date()
	expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + time)

	const { seconds, minutes, hours, restart } = useTimer({
		expiryTimestamp,
		onExpire: () => {},
	})

	function restartTime() {
		const newTime = new Date()
		newTime.setSeconds(newTime.getSeconds() + time)
		restart(newTime)
	}

	useEffect(() => {
		if (status !== 'started') return

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
				players.map((e: { name: string; score: number }) => {
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
		seconds,
		minutes,
		hours,
		time,
		handleClick,
		handleRestart,
		handleStart,
		handleReboot,
		restartTime,
	}
}

export default CustomHookProvider
