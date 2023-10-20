import { Coordinate } from './coordinate';

export class Planet {
	constructor(
		private readonly width: number,
		private readonly height: number,
		private readonly obstacles: Coordinate[] = []
	) {}

	joinEdge(coordinate: Coordinate): Coordinate {
		return new Coordinate(this.joinEdgeX(coordinate.x), this.joinEdgeY(coordinate.y));
	}

	private joinEdgeY(y: number): number {
		return (y + this.height) % this.height;
	}

	private joinEdgeX(x: number): number {
		return (x + this.width) % this.width;
	}
}
