import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectGameState, setStatus } from '../../features/slices/GameSlice'

import CustomHookProvider from '../CustomHookProvider'

export default function RestartGame() {
	const { handleReboot } = CustomHookProvider()
	const gameState = useAppSelector(selectGameState)
	const dispatch = useAppDispatch()

	function handleRestart() {
		dispatch(setStatus('started'))
	}

	const { players } = gameState
	return (
		<div>
			<div>
				<p>
					X: {players[0].score} - {players[0].name}
				</p>
				<p>
					O: {players[1].score} - {players[1].name}
				</p>
			</div>
			<button onClick={handleRestart}>Restart</button>
			<button onClick={handleReboot}>Reboot</button>
		</div>
	)
}
