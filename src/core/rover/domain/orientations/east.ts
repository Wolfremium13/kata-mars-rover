import { Direction as Orientation } from '../../application/orientation';
import { Position } from '../position';
import { North } from './north';
import { South } from './south';

export class East implements Orientation {
	what_is_left() {
		return new North();
	}
	what_is_right() {
		return new South();
	}
    what_is_forward(position: Position) {
        return new Position(position.getX() + 1, position.getY());
    }
    what_is_backward(position: Position) {
        return new Position(position.getX() - 1, position.getY());
    }
}
