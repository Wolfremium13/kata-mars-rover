import { Coordinate } from '../coordinates/coordinate';
import { CoordinateFactory } from '../coordinates/coordinate.factory';
import { ValidCoordinate } from '../coordinates/coordinate.valid';

export class Planet {
	constructor(
		private readonly width: PlanetWidth,
		private readonly height: PlanetHeight,
		private readonly obstacles: Coordinate[] = [],
		private readonly coordinateFactory: CoordinateFactory = new CoordinateFactory()
	) {}

	has(coordinate: Coordinate): boolean {
		const isAValidCoordinate = coordinate instanceof ValidCoordinate;
		const isInsideThePlanet = coordinate.getX() < this.height.value() && coordinate.getY() < this.width.value();
		return isAValidCoordinate && isInsideThePlanet;
	}

	hasObstacleAt(coordinate: Coordinate): boolean {
		return this.obstacles.some((obstacle) => obstacle.equals(coordinate));
	}

	joinEdge(coordinate: Coordinate): Coordinate {
		return this.coordinateFactory.create(this.joinEdgeX(coordinate.getX()), this.joinEdgeY(coordinate.getY()));
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
		// Throw an error maybe is worst than return a minimum value
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
		// Throw an error maybe is worst than return a minimum value
		if (value < PlanetWidth.MINIMUM) {
			return new PlanetWidth(PlanetWidth.MINIMUM);
		}
		return new PlanetWidth(value);
	}

	value(): number {
		return this.width;
	}
}
