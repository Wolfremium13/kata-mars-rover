import { Coordinate } from './coordinate';

export class InvalidCoordinate implements Coordinate {
	private constructor(private readonly x: number, private readonly y: number) {}
	equals(coordinate: Coordinate): boolean {
		return false;
	}
	static from(x: number, y: number): Coordinate {
		return new InvalidCoordinate(x, y);
	}
	getX(): number {
		return this.x;
	}
	getY(): number {
		return this.y;
	}
}
