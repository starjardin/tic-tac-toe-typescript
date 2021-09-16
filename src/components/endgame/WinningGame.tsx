import Board from '../Board'
import CustomHookProvider from '../CustomHookProvider'

const WinningGame = () => {
	const { handleRestart, restartTime, winner } = CustomHookProvider()

	return (
		<div>
			<h1>{winner ? `${winner} won !` : `It's a draw!`}</h1>
			<Board restartTime={restartTime} />
			<button onClick={handleRestart}>Restart</button>
		</div>
	)
}
export default WinningGame
