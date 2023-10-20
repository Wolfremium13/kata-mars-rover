import { describe, it, expect } from 'vitest';
import { Coordinate } from '../core/coordinate';
import { Planet } from '../core/planet';
import { Rover } from '../core/rover';
import { North } from '../core/directions/north';
import { West } from '../core/directions/west';
import { South } from '../core/directions/south';
import { East } from '../core/directions/east';

describe('Rover should', () => {
	const mars = new Planet(2, 2);
	const defaultDirection = new North();
	const defaultCoordinate = new Coordinate(0, 0);

	describe('be able to move', () => {
		it('forward', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['F']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 1), mars));
		});

		it('backward', () => {
			const startCoordinate = new Coordinate(0, 1);
			const rover = new Rover(defaultDirection, startCoordinate, mars);

			rover.executeCommands(['B']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 0), mars));
		});

		it('passing the edge of the planet', () => {
			const startCoordinate = new Coordinate(0, 1);
			const rover = new Rover(defaultDirection, startCoordinate, mars);

			rover.executeCommands(['F']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 0), mars));
		});

	});

	describe('be able to turn', () => {
		it('left', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['L']);

			const expectedDirection = new West();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});
		it('right', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['R']);

			const expectedDirection = new East();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});
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
