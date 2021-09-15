import styled from 'styled-components'

interface ButtonProps {
	index: number
	value: string
	handleClick(index: number): void
}

const ButtonStyles = styled.button`
	width: 100px;
	height: 100px;
	font-size: 46px;
	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(3),
	&:nth-child(4),
	&:nth-child(5),
	&:nth-child(6) {
		border-bottom: 1px solid #000;
	}

	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(4),
	&:nth-child(5),
	&:nth-child(7),
	&:nth-child(8) {
		border-right: 1px solid #000;
	}
	background-color: #fff;
	border: none;
	&:focus {
		outline: none;
	}
`

const Square = (props: ButtonProps) => {
	const { index, value, handleClick } = props
	return <ButtonStyles onClick={() => handleClick(index)}>{value}</ButtonStyles>
}

export default Square
