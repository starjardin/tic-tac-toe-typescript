import './App.css'
import EndGame from './components/endgame'
import Game from './components/ongame'
import StartGame from './components/startgame'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Tic tac toe</h1>
				<StartGame />
				<Game />
				<EndGame name='' handleRestart={() => {}} />
			</header>
		</div>
	)
}

export default App
