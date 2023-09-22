import { describe, expect, it } from 'vitest';
import { Position } from '../../core/rover/domain/position';
import { MarsRover } from '../../core/rover/infrastructure/mars-rover';
import { North } from '../../core/rover/domain/orientations/north';
import { East } from '../../core/rover/domain/orientations/east';
import { South } from '../../core/rover/domain/orientations/south';
import { West } from '../../core/rover/domain/orientations/west';

describe('Mars Rover orientation should', () => {
	const startingPosition = new Position(0, 0);

	it('face east', () => {
		const rover = new MarsRover(startingPosition, new North());

		rover.turnRight();

		expect(rover.getOrientation()).toEqual(new East());
	});

	it('face south', () => {
		const rover = new MarsRover(startingPosition, new East());

		rover.turnRight();

		expect(rover.getOrientation()).toEqual(new South());
	});

	it('face west', () => {
		const rover = new MarsRover(startingPosition, new South());

		rover.turnRight();

		expect(rover.getOrientation()).toEqual(new East());
	});

	it('face north', () => {
		const rover = new MarsRover(startingPosition, new West());

		rover.turnRight();

		expect(rover.getOrientation()).toEqual(new North());
	});
});
