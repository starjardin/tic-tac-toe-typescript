import { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	selectGameState,
	setStatus,
	setTime,
} from '../../features/slices/GameSlice'

import CustomHookProvider from '../CustomHookProvider'
import Input from '../Input'

export default function RestartGame() {
	const { handleReboot, time } = CustomHookProvider()
	const gameState = useAppSelector(selectGameState)
	const dispatch = useAppDispatch()
	const [timeLimit, setTimeLimit] = useState('' + time)

	function handleRestart() {
		dispatch(setStatus('started'))
		dispatch(setTime(Number(timeLimit)))
	}

	function handleTime(e: React.FormEvent<HTMLInputElement>) {
		setTimeLimit(e.currentTarget.value)
	}

	const { players } = gameState
	return (
		<div>
			<RestartStyles>
				<p>
					X: {players[0].score} - {players[0].name}
				</p>
				<p>
					O: {players[1].score} - {players[1].name}
				</p>
				<label>
					<span>turn Time limit in seconds:</span>
					<Input
						type='number'
						name='time'
						handleOnchange={(e) => handleTime(e)}
						placeHolder={''}
						value={timeLimit}
					/>
				</label>
			</RestartStyles>
			<button onClick={handleRestart}>Play again</button>
			<button onClick={handleReboot}>Reboot</button>
		</div>
	)
}

const RestartStyles = styled.div`
	text-align: start;
`
