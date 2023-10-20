import { describe, it, expect, beforeEach } from 'vitest';
import { Direction } from '../core/direction';
import { Coordinate } from '../core/coordinate';
import { Planet } from '../core/planet';
import { Rover } from '../core/rover';

describe('Rover should', () => {
	describe('move', () => {
		it('forward', () => {
			const startDirection = Direction.NORTH;
            const startCoordinate = new Coordinate(0, 0);
            const mars = new Planet(2, 2);
            const rover = new Rover(startDirection, startCoordinate, mars);

            rover.executeCommands(['F']);

            expect(rover).toMatchObject(
                new Rover(startDirection, new Coordinate(0, 1), mars)
            );
		});
        it('forward twice', () => {
            const startDirection = Direction.NORTH;
            const startCoordinate = new Coordinate(0, 0);
            const mars = new Planet(2, 2);
            const rover = new Rover(startDirection, startCoordinate, mars);

            rover.executeCommands(['F', 'F']);

            expect(rover).toMatchObject(
                new Rover(startDirection, new Coordinate(0, 2), mars)
            );
        });
	});
});
