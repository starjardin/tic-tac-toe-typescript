import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import { selectGameState } from '../features/slices/GameSlice'
import CustomHookProvider from './CustomHookProvider'
import Square from './Square'

interface Props {
	restartTime: () => void
}

export default function Board({ restartTime }: Props) {
	const gameState = useAppSelector(selectGameState)
	const { board, turn, players, winner, status } = gameState
	const { handleClick } = CustomHookProvider()

	const setTurn = () => {
		if (winner === null || winner === '')
			return `${turn === 'X' ? players[0].name : players[1].name}' turn`
		return
	}

	const handleSquareClick = (index: number) => {
		handleClick(index)
		restartTime()
	}

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
