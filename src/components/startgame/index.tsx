import { useState } from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../../app/hooks'
import { setPlayers, setStatus } from '../../features/slices/GameSlice'
import Custom from '../Custom'
import Input from '../Input'

export default function StartGame() {
	const dispatch = useAppDispatch()
	const [firstPlayer, setFirstPlayer] = useState('')
	const [secondPlayer, setSecondPlayer] = useState('')
	const [time, setTime] = useState('5')
	const { handleStart } = Custom()

	function handleFirstPlayer(e: React.FormEvent<HTMLInputElement>) {
		setFirstPlayer(e.currentTarget.value)
	}

	function handleTime(e: React.FormEvent<HTMLInputElement>) {
		setTime(e.currentTarget.value)
	}

	function handleSecondPlayer(e: React.FormEvent<HTMLInputElement>) {
		setSecondPlayer(e.currentTarget.value)
	}

	function handleStartGame(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const players = [
			{ name: firstPlayer, score: 0 },
			{ name: secondPlayer, score: 0 },
		]

		dispatch(setPlayers(players))
		handleStart(players)
		dispatch(setStatus('started'))
	}

	return (
		<FormStyles onSubmit={(e) => handleStartGame(e)}>
			<label>
				x
				<Input
					placeHolder={'leave empty to use AI or enter player name'}
					name={'first-player'}
					type={'text'}
					handleOnchange={(e) => handleFirstPlayer(e)}
				/>
			</label>
			<label>
				o
				<Input
					type='text'
					placeHolder='leave empty to use AI or enter player name'
					name='second-player'
					handleOnchange={(e) => handleSecondPlayer(e)}
				/>
			</label>
			<label>
				turn Time limit in seconds:
				<Input
					type='number'
					name='time'
					handleOnchange={(e) => handleTime(e)}
					placeHolder={''}
					defaultValue={5}
				/>
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
