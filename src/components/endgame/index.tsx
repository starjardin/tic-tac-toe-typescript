import Custom from '../Custom'

const EndGame = () => {
	const { handleRestart, winner } = Custom()
	return (
		<div>
			<h1>
				{winner && `Player ${winner} won the game`}
				{!winner && "It's a draw! "}
			</h1>
			<button onClick={handleRestart}>Restart</button>
		</div>
	)
}
export default EndGame
