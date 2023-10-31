import { CoordinateFactory } from '../coordinates/coordinate.factory';
import { Direction } from '../navigator/directions/direction';
import { Navigator } from '../navigator/navigator';
import { Planet } from '../planet/planet';
import { Rover } from './rover';
import { InvalidRover } from './rover.invalid';

export class RoverDeployer {
	constructor(
		private readonly planet: Planet,
		private readonly coordinateFactory: CoordinateFactory = new CoordinateFactory()
	) {}

	deploy(direction: Direction, x: number, y: number): Rover {
		const coordinate = this.coordinateFactory.create(x, y);
		const navigator = new Navigator(direction, coordinate);
		if (this.planet.has(coordinate)) {
			return new Rover(navigator, this.planet);
		}
		return new InvalidRover(navigator, this.planet); // RIP rover
	}
}
