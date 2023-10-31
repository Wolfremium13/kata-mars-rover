import { CoordinateFactory } from "../../../core/domain/coordinates/coordinate.factory";

export class CoordinateBuilder {
	constructor(
		private x: number = 0,
		private y: number = 0,
		private coordinateFactory: CoordinateFactory = new CoordinateFactory()
	) {}
	withX(x: number) {
		this.x = x;
		return this;
	}
	withY(y: number) {
		this.y = y;
		return this;
	}
	build() {
		return this.coordinateFactory.create(this.x, this.y);
	}
}
