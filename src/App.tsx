import CustomHookProvider from './components/CustomHookProvider'
import RestartGame from './components/endgame/RestartGame'
import WinningGame from './components/endgame/WinningGame'
import Game from './components/ongame'
import StartGame from './components/startgame'

const App = () => {
	const { status } = CustomHookProvider()

	return (
		<div>
			<h1>Tic tac toe</h1>
			{status === 'created' && <StartGame />}
			{status === 'finished' && <WinningGame />}
			{status === 'started' && <Game />}
			{status === 'restarted' && <RestartGame />}
		</div>
	)
}

export default App
