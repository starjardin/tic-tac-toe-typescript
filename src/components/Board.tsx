import { useCallback, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
	selectGameState,
	setStatus,
	setWinner,
} from '../features/slices/GameSlice'
import CustomHookProvider from './CustomHookProvider'
import Square from './Square'

interface Props {
	restartTime: () => void
}

export default function Board({ restartTime }: Props) {
	const { board, turn, players, winner, status, time } =
		useAppSelector(selectGameState)
	const { handleClick } = CustomHookProvider()
	const dispatch = useAppDispatch()

	const setTurn = useCallback(() => {
		if (winner === null || winner === '')
			return `${turn === 'X' ? players[0].name : players[1].name}' turn`
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [board])

	const handleSquareClick = useCallback(
		(index: number) => {
			handleClick(index)
			restartTime()
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[turn]
	)

	useEffect(() => {
		if (status !== 'finished') {
			const timeoutId = setTimeout(() => {
				dispatch(setWinner(turn === 'X' ? players[1].name : players[0].name))
				dispatch(setStatus('finished'))
			}, time * 1000)
			return () => clearTimeout(timeoutId)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [board])

	let className = ''
	if (winner) {
		let topLine = board.slice(0, 3)
		let middleHorizontalLine = board.slice(3, 6)
		let bottomLine = board.slice(6, 9)
		let backSlashLine = [board[0], board[4], board[8]]
		let forwardSlashLine = [board[6], board[4], board[2]]
		let middleVerticalLine = [board[1], board[4], board[7]]
		let rightLine = [board[2], board[5], board[8]]
		let leftLine = [board[0], board[3], board[6]]

		if (topLine.toString() === 'X,X,X' || topLine.toString() === 'O,O,O') {
			className = 'topLine'
		}
		if (
			middleHorizontalLine.toString() === 'X,X,X' ||
			middleHorizontalLine.toString() === 'O,O,O'
		) {
			className = 'meddleHorizontalLine'
		}
		if (
			bottomLine.toString() === 'X,X,X' ||
			bottomLine.toString() === 'O,O,O'
		) {
			className = 'bottomLine'
		}
		if (
			backSlashLine.toString() === 'X,X,X' ||
			backSlashLine.toString() === 'O,O,O'
		) {
			className = 'backSlashLine'
		}
		if (
			forwardSlashLine.toString() === 'X,X,X' ||
			forwardSlashLine.toString() === 'O,O,O'
		) {
			className = 'forwardSlashLine'
		}
		if (
			middleVerticalLine.toString() === 'X,X,X' ||
			middleVerticalLine.toString() === 'O,O,O'
		) {
			className = 'middleVerticalLine'
		}
		if (rightLine.toString() === 'X,X,X' || rightLine.toString() === 'O,O,O') {
			className = 'rightLine'
		}
		if (leftLine.toString() === 'X,X,X' || leftLine.toString() === 'O,O,O') {
			className = 'leftLine'
		}
	}

	return (
		<BoardContainer>
			{status !== 'finished' ? <TurnStyles>{setTurn()}</TurnStyles> : ''}
			{status === 'finished' && className !== '' ? (
				<LineThroughStyles className={className} />
			) : (
				''
			)}
			<BoardStyles>
				{board.map((b: string, index: number) => (
					<Square
						index={index}
						value={b}
						key={index}
						handleClick={() => handleSquareClick(index)}
						classNames={b === 'X' ? 'cross' : b === 'O' ? 'circle' : ''}
					/>
				))}
			</BoardStyles>
		</BoardContainer>
	)
}

const LineAnimation = keyframes`
 0% { height: 2px; width: 100px; }
 30% { height: 2px; width: 200px; }
 40% { height: 2px; width: 300px; }
 100% { height: 2px; width: 350px; }
`

const LineThroughStyles = styled.div`
	max-width: 400px;
	height: 2px;
	background-color: #000;
	margin: auto;
	position: relative;
	animation: ${LineAnimation};
	animation-duration: 2s;
	&.topLine {
		top: 6rem;
	}

	&.bottomLine {
		top: 18rem;
		transform: translate(45deg);
	}
	&.meddleHorizontalLine {
		top: 12rem;
	}

	&.backSlashLine {
		top: 12rem;
		transform: rotate(45deg);
	}
	&.forwardSlashLine {
		top: 12rem;
		transform: rotate(-45deg);
	}
	&.middleVerticalLine {
		top: 12rem;
		transform: rotate(90deg);
	}
	&.rightLine {
		top: 12rem;
		transform: rotate(90deg);
		left: 6.3rem;
	}
	&.leftLine {
		top: 12rem;
		transform: rotate(90deg);
		right: 6.3rem;
	}
`

const BoardContainer = styled.div`
	position: relative;
`
const TurnStyles = styled.div`
	font-size: 48px;
	line-height: 48px;
	color: #000000;
`

const BoardStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 300px;
	margin: auto;
	padding: 3rem 0;
`
