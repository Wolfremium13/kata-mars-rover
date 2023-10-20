import { describe, it, expect, beforeEach } from 'vitest';
import { Direction } from '../core/direction';
import { Coordinate } from '../core/coordinate';
import { Planet } from '../core/planet';
import { Rover } from '../core/rover';

describe('Rover should', () => {
	const mars = new Planet(2, 2);
	const defaultDirection = Direction.NORTH;
	const defaultCoordinate = new Coordinate(0, 0);

	describe('be able to move', () => {
		it('forward', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['F']);

			expect(rover).toMatchObject(new Rover(defaultDirection, new Coordinate(0, 1), mars));
		});
		it('forward twice', () => {
			const rover = new Rover(defaultDirection, defaultCoordinate, mars);

			rover.executeCommands(['F', 'F']);

			expect(rover).toMatchObject(new Rover(defaultDirection, new Coordinate(0, 2), mars));
		});

		it('backward', () => {
			const startCoordinate = new Coordinate(0, 1);
			const rover = new Rover(defaultDirection, startCoordinate, mars);

			rover.executeCommands(['B']);

			expect(rover).toMatchObject(new Rover(defaultDirection, new Coordinate(0, 0), mars));
		});

        it('backward twice', () => {
            const neptune = new Planet(5, 5);
            const startCoordinate = new Coordinate(0, 4);
            const rover = new Rover(defaultDirection, startCoordinate, neptune);

            rover.executeCommands(['B', 'B']);

            expect(rover).toMatchObject(new Rover(defaultDirection, new Coordinate(0, 2), neptune));
        });
	});
});
