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
		it('forward twice', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['F', 'F']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 2), mars));
		});

		it('backward', () => {
			const startCoordinate = new Coordinate(0, 1);
			const rover = new Rover(defaultDirection, startCoordinate, mars);

			rover.executeCommands(['B']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 0), mars));
		});

		it('backward twice', () => {
			const neptune = new Planet(5, 5);
			const startCoordinate = new Coordinate(0, 4);
			const rover = new Rover(defaultDirection, startCoordinate, neptune);

			rover.executeCommands(['B', 'B']);

			expect(rover).toStrictEqual(new Rover(defaultDirection, new Coordinate(0, 2), neptune));
		});
	});

	describe('be able to turn', () => {
		it('left', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['L']);

			const expectedDirection = new West();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});
		it('left twice', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['L', 'L']);

			const expectedDirection = new South();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});

		it('right', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['R']);

			const expectedDirection = new East();
			expect(rover).toStrictEqual(new Rover(expectedDirection, defaultCoordinate, mars));
		});
	});
});
