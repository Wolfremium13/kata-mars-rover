import { Coordinate } from '../../coordinates/coordinate';
import { CoordinateFactory } from '../../coordinates/coordinate.factory';
import { Direction } from '../directions/direction';
import { Movement } from './movement';
import { EdgeJoiner } from '../../planet/edge.joiner';

export class MoveForward implements Movement {
	constructor(
		private readonly direction: Direction,
		private readonly coordinateFactory: CoordinateFactory = new CoordinateFactory()
	) {}
	getNextCoordinate(currentPosition: Coordinate, edgeJoiner: EdgeJoiner): Coordinate {
		const mapDirectionToMovement = {
			N: () => this.moveNorth(currentPosition),
			S: () => this.moveSouth(currentPosition),
			E: () => this.moveEast(currentPosition),
			W: () => this.moveWest(currentPosition),
		};
		const position = mapDirectionToMovement[this.direction.getCode()]();
		return edgeJoiner.resolveBorderCrossing(position);
	}

	private moveNorth(currentPosition: Coordinate) {
		return this.coordinateFactory.create(currentPosition.getX(), currentPosition.getY() + 1);
	}

	private moveSouth(currentPosition: Coordinate) {
		return this.coordinateFactory.create(currentPosition.getX(), currentPosition.getY() - 1);
	}

	private moveEast(currentPosition: Coordinate) {
		return this.coordinateFactory.create(currentPosition.getX() + 1, currentPosition.getY());
	}

	private moveWest(currentPosition: Coordinate) {
		return this.coordinateFactory.create(currentPosition.getX() - 1, currentPosition.getY());
	}
}
