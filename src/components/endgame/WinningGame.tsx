import CustomHookProvider from '../CustomHookProvider'
import Game from '../ongame'

const WinningGame = () => {
	const { handleRestart, winner } = CustomHookProvider()

	return (
		<div>
			<h1>{winner ? `${winner} won !` : `It's a draw!`}</h1>
			<Game />
			<button onClick={handleRestart}>Restart</button>
		</div>
	)
}
export default WinningGame
