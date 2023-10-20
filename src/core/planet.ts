import { Coordinate } from './coordinate';

export class Planet {
	constructor(
		private readonly width: number,
		private readonly height: number,
		private readonly obstacles: Coordinate[] = []
	) {}
}
