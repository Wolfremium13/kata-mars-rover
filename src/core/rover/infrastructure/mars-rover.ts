import { Direction } from '../application/orientation';
import { North } from '../domain/orientations/north';
import { Position } from '../domain/position';

export class MarsRover {
	private position: Position;
	private direction: Direction;
	constructor(position: Position, orientation: Direction = new North()) {
		this.position = position;
		this.direction = orientation;
	}
	moveForward() {
		this.position = this.direction.what_is_forward(this.position);
	}
	moveBackward() {
		this.position = this.direction.what_is_backward(this.position);
	}
	turnLeft() {
		this.direction = this.direction.what_is_left();
	}
	turnRight() {
		this.direction = this.direction.what_is_right();
	}
	getPosition() {
		return this.position;
	}
	getOrientation(): Direction {
		return this.direction;
	}
}
