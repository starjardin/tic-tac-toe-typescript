import styled from 'styled-components'

export default function StartGame() {
	return (
		<FormStyles>
			<label>
				x
				<input
					type='text'
					placeholder='leave empty to use AI or enter player name'
				/>
			</label>
			<label>
				o
				<input
					type='text'
					placeholder='leave empty to use AI or enter player name'
				/>
			</label>
			<label>
				turn Time limit in seconds:
				<input type='number' />
			</label>
		</FormStyles>
	)
}

const FormStyles = styled.form`
	display: flex;
	flex-direction: column;
	align-items: baseline;
`
