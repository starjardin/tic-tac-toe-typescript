import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { selectGameState, setPlayers } from '../../features/slices/GameSlice'
import Board from '../Board'
import CustomHookProvider from '../CustomHookProvider'

const WinningGame = () => {
	const { handleRestart, restartTime, winner } = CustomHookProvider()
	const { players } = useAppSelector(selectGameState)

	useEffect(() => {
		if (winner === null || winner === '') {
			setPlayers(
				players.map((e: { name: string; score: number }) => ({
					...e,
					score: e.score + 1,
				}))
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [winner])
	return (
		<WinningStyles>
			<h1>{winner ? `${winner} won !` : `It's a draw!`}</h1>
			<Board restartTime={restartTime} />
			<button onClick={handleRestart}>Restart</button>
		</WinningStyles>
	)
}
export default WinningGame

const WinningStyles = styled.div`
	h1 {
		font-size: 48px;
		line-height: 48px;
		color: #000000;
	}
`
