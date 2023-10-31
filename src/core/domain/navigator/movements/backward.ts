import { Coordinate } from '../../coordinates/coordinate';
import { CoordinateFactory } from '../../coordinates/coordinate.factory';
import { Direction } from '../directions/direction';
import { Planet } from '../../planet/planet';
import { Movement } from './movement';

export class MoveBackward implements Movement {
	constructor(
		private readonly direction: Direction,
		private readonly coordinateFactory: CoordinateFactory = new CoordinateFactory()
	) {}
	getNextCoordinate(currentPosition: Coordinate, planet: Planet): Coordinate {
		const mapDirectionToMovement = {
			N: () => this.moveNorth(currentPosition),
			S: () => this.moveSouth(currentPosition),
			E: () => this.moveEast(currentPosition),
			W: () => this.moveWest(currentPosition),
		};
		const newPosition = mapDirectionToMovement[this.direction.getCode()]();
		return planet.joinEdge(newPosition);
	}

	private moveNorth(currentPosition: Coordinate): Coordinate {
		return this.coordinateFactory.create(currentPosition.getX(), currentPosition.getY() - 1);
	}

	private moveSouth(currentPosition: Coordinate): Coordinate {
		return this.coordinateFactory.create(currentPosition.getX(), currentPosition.getY() + 1);
	}

	private moveEast(currentPosition: Coordinate): Coordinate {
		return this.coordinateFactory.create(currentPosition.getX() - 1, currentPosition.getY());
	}

	private moveWest(currentPosition: Coordinate): Coordinate {
		return this.coordinateFactory.create(currentPosition.getX() + 1, currentPosition.getY());
	}
}
