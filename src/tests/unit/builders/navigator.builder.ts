import { Coordinate } from '../../../core/domain/coordinates/coordinate';
import { Direction } from '../../../core/domain/navigator/directions/direction';
import { North } from '../../../core/domain/navigator/directions/north';
import { Navigator } from '../../../core/domain/navigator/navigator';
import { CoordinateBuilder } from './coordinate.builder';

export class NavigatorBuilder {
	constructor(
		private direction: Direction = new North(),
		private coordinate: Coordinate = new CoordinateBuilder().build()
	) {}

	withDirection(direction: Direction) {
		this.direction = direction;
		return this;
	}

	withCoordinate(coordinate: Coordinate) {
		this.coordinate = coordinate;
		return this;
	}

	build() {
		return new Navigator(this.direction, this.coordinate);
	}
}
