import Custom from '../Custom'
import Game from '../ongame'

const WinningGame = () => {
	const { handleRestart, winner } = Custom()
	return (
		<div>
			<h1>{winner ? `${winner} won !` : `It's a draw!`}</h1>
			<Game />
			<button onClick={handleRestart}>Restart</button>
		</div>
	)
}
export default WinningGame
