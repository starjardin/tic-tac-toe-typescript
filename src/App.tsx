import { Route, Switch } from 'react-router'
import './App.css'
import Custom from './components/Custom'
import EndGame from './components/endgame/EndGame'
import WinningGame from './components/endgame/WinningGame'
import Game from './components/ongame'
import StartGame from './components/startgame'

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<h1>Tic tac toe</h1>
// 				<Switch>
// 					<Route exact path='/'>
// 						<StartGame />
// 						<Board />
// 					</Route>
// 					<Route exact path='/game'>
// 						<Game />
// 					</Route>
// 					<Route exact path='/end-game'>
// 						<EndGame name='' handleRestart={() => {}} />
// 					</Route>
// 				</Switch>
// 			</header>
// 		</div>
// 	)
// }

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
