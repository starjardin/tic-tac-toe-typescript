import { useAppSelector } from '../../app/hooks'
import { selectGameState } from '../../features/slices/GameSlice'
import Board from '../Board'
import CustomHookProvider from '../CustomHookProvider'

export default function Game() {
	const { status } = useAppSelector(selectGameState)
	const { restartTime, hours, minutes, seconds } = CustomHookProvider()

	return (
		<div>
			<Board restartTime={restartTime} />
			<div style={{ textAlign: 'center' }}>
				{status === 'started' ? (
					<div style={{ fontSize: '20px' }}>
						<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}s</span>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
