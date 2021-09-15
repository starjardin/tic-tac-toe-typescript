import { useAppSelector } from '../../app/hooks'
import { selectGameState } from '../../features/slices/GameSlice'
import Board from '../Board'

export default function Game() {
	const { time } = useAppSelector(selectGameState)

	return (
		<div>
			<Board expiryTimestamp={time} />
		</div>
	)
}
