import { Coordinate } from './coordinate';
import { InvalidCoordinate } from './coordinate.invalid';
import { ValidCoordinate } from './coordinate.valid';

export class CoordinateFactory {
	create(x: number, y: number): Coordinate {
		if (this.isNegative(x, y)) {
			return InvalidCoordinate.from(x, y);
		}
		return ValidCoordinate.from(x, y);
	}

	private isNegative(x: number, y: number): boolean {
        return x < 0 || y < 0 ? true : false;
	}
}
