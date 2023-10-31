import { Coordinate } from './coordinate';

export class ValidCoordinate implements Coordinate {
	private constructor(private readonly x: number, private readonly y: number) {}
	equals(coordinate: Coordinate): boolean {
		return this.x === coordinate.getX() && this.y === coordinate.getY();
	}
	static from(x: number, y: number): Coordinate {
		return new ValidCoordinate(x, y);
	}
	getX(): number {
		return this.x;
	}
	getY(): number {
		return this.y;
	}
}
