import { useState } from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../../app/hooks'
import { setPlayers, setStatus } from '../../features/slices/GameSlice'
import Custom from '../Custom'

export default function StartGame() {
	const dispatch = useAppDispatch()
	const [firstPlayer, setFirstPlayer] = useState('')
	const [secondPlayer, setSecondPlayer] = useState('')
	const { handleStart } = Custom()

	function handleFirstPlayer(e: React.FormEvent<HTMLInputElement>) {
		setFirstPlayer(e.currentTarget.value)
	}

	function handleSecondPlayer(e: React.FormEvent<HTMLInputElement>) {
		setSecondPlayer(e.currentTarget.value)
	}

	function handleStartGame(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch(setPlayers([firstPlayer, secondPlayer]))
		console.log()

		handleStart([firstPlayer, secondPlayer])

		dispatch(setStatus('started'))
		console.log('submited')
	}

	return (
		<FormStyles onSubmit={(e) => handleStartGame(e)}>
			<label>
				x
				<input
					type='text'
					placeholder='leave empty to use AI or enter player name'
					name='first-player'
					onChange={(e) => handleFirstPlayer(e)}
					value={firstPlayer}
				/>
			</label>
			<label>
				o
				<input
					type='text'
					placeholder='leave empty to use AI or enter player name'
					name='second-player'
					onChange={(e) => handleSecondPlayer(e)}
					value={secondPlayer}
				/>
			</label>
			<label>
				turn Time limit in seconds:
				<input type='number' />
			</label>
			<button type='submit'>Start Game</button>
		</FormStyles>
	)
}

const FormStyles = styled.form`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`
