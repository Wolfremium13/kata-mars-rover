import { describe, it, expect } from 'vitest';
import { South } from '../../core/domain/navigator/directions/south';
import { PlanetBuilder } from './builders/planet.builder';
import { RoverBuilder } from './builders/rover.builder';
import { North } from '../../core/domain/navigator/directions/north';
import { CoordinateBuilder } from './builders/coordinate.builder';

describe('Rover should', () => {
	describe('be able to move', () => {
		const obstacle = new CoordinateBuilder().withX(0).withY(1).build();
		const planetWithObstacle = new PlanetBuilder().withHeight(3).withWidth(3).withObstacles([obstacle]).build();
		describe('not surpassing obstacles that are in the way', () => {
			it('when moving forward', () => {
				const rover = new RoverBuilder().withPlanet(planetWithObstacle).build();

				rover.executeCommands(['F']);

				expect(rover).toStrictEqual(new RoverBuilder().withPlanet(planetWithObstacle).build());
			});
			it('when moving backward', () => {
				const startingCoordinate = new CoordinateBuilder().withY(2).build();
				const rover = new RoverBuilder().withPlanet(planetWithObstacle).withCoordinate(startingCoordinate).build();

				rover.executeCommands(['B']);

				expect(rover).toStrictEqual(
					new RoverBuilder().withPlanet(planetWithObstacle).withCoordinate(startingCoordinate).build()
				);
			});
		});
		describe('and border the obstacles', () => {
			it('when moving forward', () => {
				const startingCoordinate = new CoordinateBuilder().withX(1).build();
				const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planetWithObstacle).build();

				rover.executeCommands(['F', 'L', 'F', 'R', 'F']);

				const expectedCoordinate = new CoordinateBuilder().withX(1).withY(2).build();
				expect(rover).toStrictEqual(
					new RoverBuilder().withCoordinate(expectedCoordinate).withPlanet(planetWithObstacle).build()
				);
			});
			it('when moving backward', () => {
				const startingCoordinate = new CoordinateBuilder().withX(1).withY(2).build();
				const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(planetWithObstacle).build();

				rover.executeCommands(['B', 'R', 'B', 'L', 'B']);

				const expectedCoordinate = new CoordinateBuilder().withX(1).build();
				expect(rover).toStrictEqual(
					new RoverBuilder().withCoordinate(expectedCoordinate).withPlanet(planetWithObstacle).build()
				);
			});
		});
		describe('and turn around the planet', () => {
			it('when moving forward', () => {
				const startingCoordinate = new CoordinateBuilder().build();
				const rover = new RoverBuilder().withCoordinate(startingCoordinate).build();

				rover.executeCommands(['F', 'F']);

				expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(startingCoordinate).build());
			});
			it('when moving backward', () => {
				const rover = new RoverBuilder().build();

				rover.executeCommands(['B']);

				const expectedCoordinate = new CoordinateBuilder().withY(1).build();
				expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(expectedCoordinate).build());
			});
		});
		describe('be able to keep the same direction', () => {
			const bigPlainPlanet = new PlanetBuilder().withHeight(10).withWidth(10).build();
			it('when moving forward', () => {
				const rover = new RoverBuilder().withPlanet(bigPlainPlanet).build();

				rover.executeCommands(['F', 'F', 'F', 'F']);

				const expectedDirection = new North();
				expect(rover).toStrictEqual(
					new RoverBuilder()
						.withPlanet(bigPlainPlanet)
						.withDirection(expectedDirection)
						.withCoordinate(new CoordinateBuilder().withY(4).build())
						.build()
				);
			});
			it('when moving backward', () => {
				const startingCoordinate = new CoordinateBuilder().withY(4).build();
				const rover = new RoverBuilder().withCoordinate(startingCoordinate).withPlanet(bigPlainPlanet).build();

				rover.executeCommands(['B', 'B', 'B', 'B']);

				const expectedDirection = new North();
				expect(rover).toStrictEqual(
					new RoverBuilder().withPlanet(bigPlainPlanet).withDirection(expectedDirection).build()
				);
			});
		});
	});

	describe('be able to turn', () => {
		it('around', () => {
			const rover = new RoverBuilder().build();

			rover.executeCommands(['R', 'R']);

			const expectedDirection = new South();
			expect(rover).toStrictEqual(new RoverBuilder().withDirection(expectedDirection).build());
		});

		it('around in a circle', () => {
			const rover = new RoverBuilder().build();
			rover.executeCommands(['R', 'R', 'R', 'R']);

			expect(rover).toStrictEqual(new RoverBuilder().build());
		});
	});
});
