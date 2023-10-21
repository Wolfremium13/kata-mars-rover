import { Coordinate } from '../../core/coordinate';
import { Planet } from '../../core/planet';
import { North } from '../../core/directions/north';
import { Rover } from '../../core/rover';
import { Direction } from '../../core/directions/direction';

export class RoverBuilder {
	private planet: Planet = new Planet(2, 2);
	private direction: Direction = new North();
	private coordinate: Coordinate = new Coordinate(0, 0);

	public withCoordinate(coordinate: Coordinate) {
		this.coordinate = coordinate;
		return this;
	}

	public withDirection(direction: Direction) {
		this.direction = direction;
		return this;
	}

	public withPlanet(planet: Planet) {
		this.planet = planet;
		return this;
	}

	public build() {
		return new Rover(this.direction, this.coordinate, this.planet);
	}
}
