import { Direction } from '../../application/orientation';
import { Position } from '../position';
import { East } from './east';
import { West } from './west';

export class North implements Direction {
	what_is_left(): Direction {
		return new West();
	}
	what_is_right(): Direction {
		return new East();
	}
	what_is_forward(position: Position) {
		return new Position(position.getX(), position.getY() + 1);
	}
	what_is_backward(position: Position) {
		return new Position(position.getX(), position.getY() - 1);
	}
}
