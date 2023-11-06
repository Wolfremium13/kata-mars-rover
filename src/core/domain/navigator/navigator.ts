import { Coordinate } from '../coordinates/coordinate';
import { Direction } from './directions/direction';
import { Planet } from '../planet/planet';
import { MoveBackward } from './movements/backward';
import { MoveForward } from './movements/forward';
import { ObstacleFinder } from '../planet/obstacle.finder';

export class Navigator {
	constructor(private direction: Direction, private coordinate: Coordinate) {}
	moveForward(planet: Planet, obstacleFinder: ObstacleFinder): void {
		const movement = new MoveForward(this.direction);
		const nextCoordinate = movement.getNextCoordinate(this.coordinate, planet);
		if (obstacleFinder.findObstacleIn(nextCoordinate)) {
			return;
		}
		this.coordinate = nextCoordinate;
	}
	moveBackward(planet: Planet, obstacleFinder: ObstacleFinder): void {
		const movement = new MoveBackward(this.direction);
		const nextCoordinate = movement.getNextCoordinate(this.coordinate, planet);
		if (obstacleFinder.findObstacleIn(nextCoordinate)) {
			return;
		}
		this.coordinate = nextCoordinate;
	}
	turnLeft(): void {
		this.direction = this.direction.whatIsLeft();
	}
	turnRight(): void {
		this.direction = this.direction.whatIsRight();
	}
	currentCoordinate(): Coordinate {
		return this.coordinate;
	}
}
