import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
	selectGameState,
	setStatus,
	setWinner,
} from '../features/slices/GameSlice'
import Custom from './Custom'
import Square from './Square'

export default function Board({ expiryTimestamp }: any) {
	const gameState = useAppSelector(selectGameState)
	const { board, turn, players, winner, time, status } = gameState

	const { handleClick } = Custom()
	const dispatch = useAppDispatch()

	const setTurn = () => {
		if (winner === null || winner === '')
			return `${turn === 'X' ? players[0].name : players[1].name}' turn`
		return
	}

	const { seconds, minutes, hours, restart } = useTimer({
		expiryTimestamp,
		onExpire: () => {},
	})

	function restartTime() {
		const newTime = new Date()
		newTime.setSeconds(newTime.getSeconds() + time)
		restart(newTime)
	}

	const expireTime = new Date()
	expireTime.setSeconds(expireTime.getSeconds() + time)

	const handleSquareClick = (index: number) => {
		handleClick(index)
		restartTime()
	}

	useEffect(() => {
		restartTime()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<BoardContainer>
			{status !== 'finished' ? <div>{setTurn()}</div> : ''}
			<LineThroughStyles />{' '}
			<BoardStyles>
				{board.map((b: string, index: number) => (
					<Square
						index={index}
						value={b}
						key={index}
						handleClick={() => handleSquareClick(index)}
					/>
				))}
			</BoardStyles>
			<div style={{ textAlign: 'center' }}>
				{status === 'started' ? (
					<div style={{ fontSize: '20px' }}>
						<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}s</span>
					</div>
				) : (
					''
				)}
			</div>
		</BoardContainer>
	)
}

const LineThroughStyles = styled.div`
	max-width: 300px;
	height: 2px;
	background-color: #000;
	margin: auto;
`

const BoardContainer = styled.div`
	position: relative;
`

const BoardStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 300px;
	margin: auto;
	padding: 3rem 0;
`

/*
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

	while (winningPositionsIndex < winningPositions.length && !winner) {
		const boardPositionsToCheck = winningPositions[winningPositionsIndex]

		const boardValuesToCheck = boardPositionsToCheck.map(
			(index) => board[index]
		)

		const checkingValue = boardValuesToCheck[0]

		const isFinished = boardValuesToCheck.every(
			(value) => value === checkingValue && checkingValue
		)

		const end = !isFinished ? null : checkingValue
		if (end) {
			// setValue(boardPositionsToCheck)
		}
		winningPositionsIndex++
	}


*/
// const [value, setValue] = useState(time)
