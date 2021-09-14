import React, { useState } from 'react'

interface InputProps {
	handleOnchange: (e: React.FormEvent<HTMLInputElement>) => void
	type: string
	defaultValue?: string | number
	placeHolder: string
	name: string
}

export default function Input({
	handleOnchange,
	type,
	defaultValue,
	placeHolder,
	name,
}: InputProps) {
	const [value, setValue] = useState(defaultValue)

	return (
		<input
			type={type}
			placeholder={placeHolder}
			name={name}
			onChange={(e) => handleOnchange(e)}
			value={value}
		/>
	)
}
