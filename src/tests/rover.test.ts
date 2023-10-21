import { describe, it, expect } from 'vitest';
import { Coordinate } from '../core/coordinate';
import { South } from '../core/directions/south';
import { PlanetBuilder } from './builders/planet.builder';
import { RoverBuilder } from './builders/rover.builder';
import { North } from '../core/directions/north';

describe('Rover should', () => {
	describe('be able to move', () => {
		const obstacle = new Coordinate(0, 1);
		const planetWithObstacle = new PlanetBuilder().withHeight(3).withWidth(3).withObstacles([obstacle]).build();
		describe('not surpassing obstacles that are in the way', () => {
			it('when moving forward', () => {
				const rover = new RoverBuilder().withPlanet(planetWithObstacle).build();

				rover.executeCommands(['F']);

				expect(rover).toStrictEqual(new RoverBuilder().withPlanet(planetWithObstacle).build());
			});
			it('when moving backward', () => {
				const rover = new RoverBuilder().withPlanet(planetWithObstacle).withCoordinate(new Coordinate(0, 2)).build();

				rover.executeCommands(['B']);

				expect(rover).toStrictEqual(
					new RoverBuilder().withPlanet(planetWithObstacle).withCoordinate(new Coordinate(0, 2)).build()
				);
			});
		});
		describe('and border the obstacles', () => {
			it('when moving forward', () => {
				const rover = new RoverBuilder().withCoordinate(new Coordinate(1, 0)).withPlanet(planetWithObstacle).build();

				rover.executeCommands(['F', 'L', 'F', 'R', 'F']);

				expect(rover).toStrictEqual(
					new RoverBuilder().withCoordinate(new Coordinate(1, 2)).withPlanet(planetWithObstacle).build()
				);
			});
			it('when moving backward', () => {
				const rover = new RoverBuilder().withCoordinate(new Coordinate(1, 2)).withPlanet(planetWithObstacle).build();

				rover.executeCommands(['B', 'R', 'B', 'L', 'B']);

				expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(new Coordinate(1,0)).withPlanet(planetWithObstacle).build());
			});
		});
		describe('and turn around the planet', () => {
			it('when moving forward', () => {
				const rover = new RoverBuilder().withCoordinate(new Coordinate(0, 0)).build();

				rover.executeCommands(['F', 'F']);

				expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(new Coordinate(0, 0)).build());
			});
			it('when moving backward', () => {
				const rover = new RoverBuilder().build();

				rover.executeCommands(['B']);

				expect(rover).toStrictEqual(new RoverBuilder().withCoordinate(new Coordinate(0, 1)).build());
			});
		});
		describe('be able to keep the same direction', () => {
			const bigPlainPlanet = new PlanetBuilder().withHeight(10).withWidth(10).build();
			it('when moving forward', () => {
				const rover = new RoverBuilder().withPlanet(bigPlainPlanet).build();

				rover.executeCommands(['F', 'F', 'F', 'F']);

				const expectedDirection = new North();
				expect(rover).toStrictEqual(new RoverBuilder().withPlanet(bigPlainPlanet).withDirection(expectedDirection).withCoordinate(
					new Coordinate(0, 4)
					).build());
			});
			it('when moving backward', () => {
				const rover = new RoverBuilder().withCoordinate(new Coordinate(0,4)).withPlanet(bigPlainPlanet).build();

				rover.executeCommands(['B', 'B', 'B', 'B']);

				const expectedDirection = new North();
				expect(rover).toStrictEqual(new RoverBuilder().withPlanet(bigPlainPlanet).withDirection(expectedDirection).build());
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
