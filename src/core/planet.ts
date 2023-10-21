import { Coordinate } from './coordinate';

export class Planet {
	constructor(
		private readonly width: PlanetWidth,
		private readonly height: PlanetHeight,
		private readonly obstacles: Coordinate[] = []
	) {}

	hasObstacleAt(coordinate: Coordinate): boolean {
		return this.obstacles.some((obstacle) => obstacle.equals(coordinate));
	}

	joinEdge(coordinate: Coordinate): Coordinate {
		return new Coordinate(this.joinEdgeX(coordinate.x), this.joinEdgeY(coordinate.y));
	}

	private joinEdgeY(positionY: number): number {
		const planetHeight = this.height.value();
		return (positionY + planetHeight) % planetHeight;
	}

	private joinEdgeX(positionX: number): number {
		const planetWith = this.width.value();
		return (positionX + planetWith) % planetWith;
	}
}

export class PlanetHeight {
	private static readonly MINIMUM = 1;

	private constructor(private readonly height: number) {}

	static from(value: number): PlanetHeight {
		if (value < PlanetHeight.MINIMUM) {
			return new PlanetHeight(PlanetHeight.MINIMUM);
		}
		return new PlanetHeight(value);
	}

	value(): number {
		return this.height;
	}
}

export class PlanetWidth {
	private static readonly MINIMUM = 1;

	private constructor(private readonly width: number) {}

	static from(value: number): PlanetWidth {
		if (value < PlanetWidth.MINIMUM) {
			return new PlanetWidth(PlanetWidth.MINIMUM);
		}
		return new PlanetWidth(value);
	}

	value(): number {
		return this.width;
	}
}
