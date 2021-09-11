import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import { selectGameState } from '../features/slices/GameSlice'
import Custom from './Custom'

export default function Board() {
	const gameState = useAppSelector(selectGameState)
	const { board } = gameState

	const { handleClick } = Custom()

	return (
		<BoardStyles>
			{' '}
			{board.map((b: any, index: number) => (
				<Square
					index={index}
					value={b}
					key={index}
					handleClick={() => handleClick(index)}
				/>
			))}
		</BoardStyles>
	)
}

interface Props {
	index: number
	value: string
	handleClick(index: number): void
}
const Square = (props: Props) => {
	const { index, value, handleClick } = props

	const styles = {
		button: {
			width: '100px',
			height: '100px',
			fontSize: '46px',
		},
	}
	return (
		<button style={styles.button} onClick={() => handleClick(index)}>
			{value}
		</button>
	)
}

const BoardStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 300px;
	margin: auto;
`
