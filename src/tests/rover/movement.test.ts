import { describe, expect, it } from 'vitest';
import { Position } from '../../core/rover/domain/position';
import { MarsRover } from '../../core/rover/infrastructure/mars-rover';

describe('Mars Rover movement should', () => {
	const startingPosition = new Position(0, 0);
	let rover: MarsRover;
	beforeEach(() => {
		rover = new MarsRover(startingPosition);
	});

	it('move forward', () => {
		rover.moveForward();
		rover.moveForward();

		expect(rover.getPosition()).toEqual(new Position(0, 2));
	});

	it('move backward', () => {
		rover.moveBackward();
		rover.moveBackward();

		expect(rover.getPosition()).toEqual(new Position(0, -2));
	});
});
