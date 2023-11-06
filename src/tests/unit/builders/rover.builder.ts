import { Coordinate } from '../../../core/domain/coordinates/coordinate';
import { ValidCoordinate } from '../../../core/domain/coordinates/coordinate.valid';
import { Direction } from '../../../core/domain/navigator/directions/direction';
import { North } from '../../../core/domain/navigator/directions/north';
import { Navigator } from '../../../core/domain/navigator/navigator';
import { Planet } from '../../../core/domain/planet/planet';
import { RoverDeployer } from '../../../core/domain/rovers/rover.deployer';
import { PlanetBuilder } from './planet.builder';

export class RoverBuilder {
	private planet: Planet = new PlanetBuilder().withHeight(2).withWidth(2).build();
	private direction: Direction = new North();
	private coordinate: Coordinate = ValidCoordinate.from(0, 0);

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
		const navigator = new Navigator(this.direction, this.coordinate);
		const deployer = new RoverDeployer(this.planet, navigator);
		return deployer.deploy();
	}
}
