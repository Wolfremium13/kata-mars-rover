import { Navigator } from '../navigator/navigator';
import { Planet } from '../planet/planet';
import { Rover } from './rover';
import { InvalidRover } from './rover.invalid';

export class RoverDeployer {
	constructor(private readonly planet: Planet, private readonly navigator: Navigator) {}

	deploy(): Rover {
		if (this.planet.has(this.navigator.currentCoordinate())) {
			return new Rover(this.navigator, this.planet);
		}
		return new InvalidRover(this.navigator, this.planet); // RIP rover
	}
}
