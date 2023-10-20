import { Coordinate } from '../coordinate';
import { Direction } from '../directions/direction';
import { Planet } from '../planet';
import { Movement } from './movement';

export class MoveForward implements Movement {
	constructor(private readonly direction: Direction) {}
	move(currentPosition: Coordinate, planet: Planet): Coordinate {
		const mapDirectionToMovement = {
			N: () => this.moveNorth(currentPosition),
			S: () => this.moveSouth(currentPosition),
			E: () => this.moveEast(currentPosition),
			W: () => this.moveWest(currentPosition),
		};
		const position = mapDirectionToMovement[this.direction.getCode()]();
		return planet.joinEdge(position);
	}

	private moveNorth(currentPosition: Coordinate) {
		return new Coordinate(currentPosition.x, currentPosition.y + 1);
	}

	private moveSouth(currentPosition: Coordinate) {
		return new Coordinate(currentPosition.x, currentPosition.y - 1);
	}

	private moveEast(currentPosition: Coordinate) {
		return new Coordinate(currentPosition.x + 1, currentPosition.y);
	}

	private moveWest(currentPosition: Coordinate) {
		return new Coordinate(currentPosition.x - 1, currentPosition.y);
	}
}
