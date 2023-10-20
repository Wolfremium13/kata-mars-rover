export class Coordinate {
    constructor(readonly x: number, readonly y: number) {}

    equals(coordinate: Coordinate): boolean {
        return this.x === coordinate.x && this.y === coordinate.y;
    }
}