import { Coordinate } from '../coordinate';
import { Planet } from '../planet';
import { Movement } from './movement';

export class MoveBackward implements Movement {
	move(currentPosition: Coordinate, planet: Planet): Coordinate {
		return new Coordinate(currentPosition.x, currentPosition.y - 1);
	}
}
