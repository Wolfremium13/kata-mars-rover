import { Coordinate } from '../coordinate';
import { Direction } from '../directions/direction';
import { Planet } from '../planet';
import { Movement } from './movement';

export class MoveBackward implements Movement {
	constructor(direction: Direction) {}
	move(currentPosition: Coordinate, planet: Planet): Coordinate {
		return new Coordinate(currentPosition.x, currentPosition.y - 1);
	}
}
