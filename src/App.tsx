import './App.css'
import Custom from './components/Custom'
import EndGame from './components/endgame/EndGame'
import WinningGame from './components/endgame/WinningGame'
import Game from './components/ongame'
import StartGame from './components/startgame'

const App = () => {
	const { status } = Custom()

	return (
		<div className='App'>
			<h1>Tic tac toe</h1>
			{status === 'created' && <StartGame />}
			{status === 'finished' && <WinningGame />}
			{status === 'started' && <Game />}
			{status === 'restarted' && <EndGame />}
		</div>
	)
}

export default App
