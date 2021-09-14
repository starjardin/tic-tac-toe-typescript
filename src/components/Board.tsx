import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import { selectGameState } from '../features/slices/GameSlice'
import Custom from './Custom'

export default function Board() {
	const gameState = useAppSelector(selectGameState)
	const { board, turn, players, winner, time } = gameState

	const { handleClick } = Custom()

	const setTurn = () => {
		if (winner === null || winner === '')
			return `${turn === 'X' ? players[0].name : players[1].name}' turn`
		return
	}

	return (
		<div>
			<div>{setTurn()}</div>
			<BoardStyles>
				{' '}
				{board.map((b: string, index: number) => (
					<Square
						index={index}
						value={b}
						key={index}
						handleClick={() => handleClick(index)}
					/>
				))}
			</BoardStyles>
			time left: {time}s
		</div>
	)
}

interface Props {
	index: number
	value: string
	handleClick(index: number): void
}
const Square = (props: Props) => {
	const { index, value, handleClick } = props

	return <ButtonStyles onClick={() => handleClick(index)}>{value}</ButtonStyles>
}

const BoardStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 300px;
	margin: auto;
	padding: 3rem 0;
`

const ButtonStyles = styled.button`
	width: 100px;
	height: 100px;
	font-size: 46px;
	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(3),
	&:nth-child(4),
	&:nth-child(5),
	&:nth-child(6) {
		border-bottom: 1px solid #000;
	}

	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(4),
	&:nth-child(5),
	&:nth-child(7),
	&:nth-child(8) {
		border-right: 1px solid #000;
	}
	background-color: #fff;
	border: none;
	&:focus {
		outline: none;
	}
`
