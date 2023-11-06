import { Coordinate } from '../coordinates/coordinate';
import { Planet } from './planet';

export class EdgeJoiner {
	constructor(private readonly planet: Planet) {}

	resolveBorderCrossing(coordinate: Coordinate): Coordinate {
		return this.planet.joinEdge(coordinate);
	}
}
