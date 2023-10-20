import { describe, it, expect } from 'vitest';
import { Coordinate } from '../core/coordinate';
import { Planet } from '../core/planet';
import { Rover } from '../core/rover';
import { North } from '../core/directions/north';
import { South } from '../core/directions/south';

describe('Rover should', () => {
	const mars = new Planet(2, 2);
	const defaultDirection = new North();
	const defaultCoordinate = new Coordinate(0, 0);

	describe('be able to move', () => {
		describe('not surpassing obstacles that are in the way', () => {
			const obstacle = new Coordinate(0, 1);
			const planetWithObstacle = new Planet(2, 2, [obstacle]);
			it('when moving forward', () => {
				const rover = new Rover(defaultDirection, defaultCoordinate, planetWithObstacle);

				rover.executeCommands(['F']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, defaultCoordinate, planetWithObstacle));
			});
			it('when moving backward', () => {
				const rover = new Rover(defaultDirection, new Coordinate(0, 2), planetWithObstacle);

				rover.executeCommands(['B']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 2), planetWithObstacle));
			});
		});
		describe('and border the obstacles', () => {
			const obstacle = new Coordinate(0, 1);
			const planetWithObstacle = new Planet(3, 3, [obstacle]);
			it('when moving forward', () => {
				const rover = new Rover(defaultDirection, new Coordinate(0, 2), planetWithObstacle);

				rover.executeCommands(['F', 'L', 'F', 'R', 'F']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(2, 1), planetWithObstacle));
			});
			it('when moving backward', () => {
				const rover = new Rover(defaultDirection, new Coordinate(2, 1), planetWithObstacle);

				rover.executeCommands(['B', 'R', 'B', 'L', 'B']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(1, 2), planetWithObstacle));
			});
		});
		describe('and turn around the planet', () => {
			it('when moving forward', () => {
				const rover = new Rover(defaultDirection, new Coordinate(0, 2), mars);

				rover.executeCommands(['F', 'F']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 0), mars));
			});
			it('when moving backward', () => {
				const rover = new Rover(defaultDirection, new Coordinate(0, 0), mars);

				rover.executeCommands(['B']);

				expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 1), mars));
			});
		});
	});

	describe('be able to turn', () => {
		it('around', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['R', 'R']);

			const expectedDirection = new South();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});

		it('around in a circle', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['R', 'R', 'R', 'R']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, defaultCoordinate, mars));
		});
	});
});
