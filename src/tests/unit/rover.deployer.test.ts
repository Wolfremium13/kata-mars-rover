import { describe, it, expect } from 'vitest';
import { CoordinateBuilder } from './builders/coordinate.builder';
import { PlanetBuilder } from './builders/planet.builder';
import { RoverBuilder } from './builders/rover.builder';
import { InvalidRover } from '../../core/domain/rovers/rover.invalid';
import { ValidCoordinate } from '../../core/domain/coordinates/coordinate.valid';
import { Rover } from '../../core/domain/rovers/rover';
import { InvalidCoordinate } from '../../core/domain/coordinates/coordinate.invalid';
import { Command } from '../../core/domain/rovers/commands/command';

describe('Rover deployer could', () => {
	const planetWidth = 5;
	const planetHeight = 5;
	const planet = new PlanetBuilder().withHeight(planetHeight).withWidth(planetWidth).build();
    const commands: Command[] = ['F', 'B', 'L', 'R', 'F'];
	describe('deploy', () => {
		it('on a valid coordinate but not of the planet and be useless', () => {
			const positionOutsideThePlanet = planetWidth + 1;
			const startingCoordinate = new CoordinateBuilder().withX(positionOutsideThePlanet).build();

			const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build();

			rover.executeCommands(commands);

			expect(startingCoordinate).toBeInstanceOf(ValidCoordinate);
			expect(rover).toBeInstanceOf(InvalidRover);
			expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build());
		});

		it('on a valid coordinate of the planet and be useful', () => {
			const startingCoordinate = new CoordinateBuilder().withX(0).withY(0).build();

			const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build();

			rover.executeCommands(commands);

			expect(startingCoordinate).toBeInstanceOf(ValidCoordinate);
			expect(rover).toBeInstanceOf(Rover);
			expect(rover).not.toStrictEqual(new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build());
		});

		it('on a invalid coordinate and be useless', () => {
			const startingCoordinate = new CoordinateBuilder().withX(-1).withY(0).build();

			const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build();

			rover.executeCommands(commands);

			expect(startingCoordinate).toBeInstanceOf(InvalidCoordinate);
			expect(rover).toBeInstanceOf(InvalidRover);
			expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planet).build());
		});
	});
});
