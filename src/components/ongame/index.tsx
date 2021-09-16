import Board from '../Board'
import CustomHookProvider from '../CustomHookProvider'

export default function Game() {
	const { restartTime, hours, minutes, seconds } = CustomHookProvider()

	return (
		<div>
			<Board restartTime={restartTime} />
			<div style={{ textAlign: 'center' }}>
				<div style={{ fontSize: '20px' }}>
					<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}s</span>
				</div>
			</div>
		</div>
	)
}
