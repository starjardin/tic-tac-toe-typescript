import React from 'react'

interface InputProps {
	handleOnchange: (e: React.FormEvent<HTMLInputElement>) => void
	type: string
	value?: string | number
	placeHolder: string
	name: string
}

export default function Input({
	handleOnchange,
	type,
	placeHolder,
	name,
	value,
}: InputProps) {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			name={name}
			onChange={(e) => handleOnchange(e)}
			value={value}
			min={1}
		/>
	)
}
