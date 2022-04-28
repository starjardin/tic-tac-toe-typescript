import { useState } from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../../app/hooks'
import { setTime, setPlayers, setStatus } from '../../features/slices/GameSlice'
import CustomHookProvider from '../CustomHookProvider'
import Input from '../Input'

export default function StartGame() {
	const dispatch = useAppDispatch()
	const [firstPlayer, setFirstPlayer] = useState('')
	const [secondPlayer, setSecondPlayer] = useState('')
	const { handleStart, time } = CustomHookProvider()
	const [timeLimit, setTimeLimit] = useState('' + time)

	function handleFirstPlayer(e: React.FormEvent<HTMLInputElement>) {
		setFirstPlayer(e.currentTarget.value)
	}

	function handleTime(e: React.FormEvent<HTMLInputElement>) {
		setTimeLimit(e.currentTarget.value)
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
		dispatch(setTime(Number(timeLimit)))
	}

	return (
		<FormStyles onSubmit={(e) => handleStartGame(e)}>
			<label>
				x
				<Input
					placeHolder={'enter a player name'}
					name={'first-player'}
					type={'text'}
					handleOnchange={(e) => handleFirstPlayer(e)}
				/>
			</label>
			<label>
				o
				<Input
					type='text'
					placeHolder='enter a player name'
					name='second-player'
					handleOnchange={(e) => handleSecondPlayer(e)}
				/>
			</label>
			<label>
				<span>Turn Time limit in seconds:</span>
				<Input
					type='number'
					name='time'
					handleOnchange={(e) => handleTime(e)}
					placeHolder={''}
					value={timeLimit}
				/>
			</label>
			<button type='submit' disabled={!firstPlayer && !secondPlayer}>
				Start Game <span>Please fill the inputs</span>
			</button>
		</FormStyles>
	)
}

const FormStyles = styled.form`
	display: flex;
	flex-direction: column;
	button {
		position: relative;
	}
	button {
		span {
			visibility: hidden;
			position: absolute;
		}
	}
	button:disabled:hover {
		span {
			visibility: visible;
			font-size: 2rem;
			width: 100%;
			left: 0;
			top: 4rem;
			margin: 0;
		}
	}
`
