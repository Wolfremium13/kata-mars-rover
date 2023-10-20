import { describe, it, expect } from 'vitest';
import { North } from '../core/directions/north';
import { Coordinate } from '../core/coordinate';
import { MoveForward } from '../core/movements/forward';
import { Planet } from '../core/planet';
import { South } from '../core/directions/south';
import { West } from '../core/directions/west';
import { East } from '../core/directions/east';
import { MoveBackward } from '../core/movements/backward';
import * as fc from 'fast-check';

describe('Movements should', () => {
	describe('be able to move', () => {
		const planet = new Planet(10, 10);
		describe('forward', () => {
			const startPosition = new Coordinate(5, 5);
			it('when facing north', () => {
				const direction = new North();
				const movement = new MoveForward(direction);

				const expectedCoordinate = new Coordinate(5, 6);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing south', () => {
				const direction = new South();
				const movement = new MoveForward(direction);

				const expectedCoordinate = new Coordinate(5, 4);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing east', () => {
				const direction = new East();
				const movement = new MoveForward(direction);

				const expectedCoordinate = new Coordinate(6, 5);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing west', () => {
				const direction = new West();
				const movement = new MoveForward(direction);

				const expectedCoordinate = new Coordinate(4, 5);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});
		});

		describe('backward', () => {
			const startPosition = new Coordinate(5, 5);
			it('when facing north', () => {
				const direction = new North();
				const movement = new MoveBackward(direction);

				const expectedCoordinate = new Coordinate(5, 4);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing south', () => {
				const direction = new South();
				const movement = new MoveBackward(direction);

				const expectedCoordinate = new Coordinate(5, 6);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing east', () => {
				const direction = new East();
				const movement = new MoveBackward(direction);

				const expectedCoordinate = new Coordinate(4, 5);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});

			it('when facing west', () => {
				const direction = new West();
				const movement = new MoveBackward(direction);

				const expectedCoordinate = new Coordinate(6, 5);
				expect(movement.move(startPosition, planet)).toStrictEqual(expectedCoordinate);
			});
		});

		describe('on a random combination', () => {
			const planet = new Planet(10, 10);
    		const startPosition = new Coordinate(5, 5);
			const directionsArbitrary = fc.oneof(
				fc.constant(new North()),
				fc.constant(new South()),
				fc.constant(new East()),
				fc.constant(new West())
			);
		
			it('be able to move in any direction and movement within planet boundaries', () => {
				fc.assert(
					fc.property(directionsArbitrary, (direction) => {
						const forwardMovement = new MoveForward(direction);
						const backwardMovement = new MoveBackward(direction);
		
						const forwardResult = forwardMovement.move(startPosition, planet);
						const backwardResult = backwardMovement.move(startPosition, planet);
		
						expect(isWithinPlanetBoundaries(forwardResult, planet)).toBeTruthy();
                		expect(isWithinPlanetBoundaries(backwardResult, planet)).toBeTruthy();
					})
				);
				function isWithinPlanetBoundaries(coordinate, planet) {
					return coordinate.x >= 0 && coordinate.x <= planet.width &&
						   coordinate.y >= 0 && coordinate.y <= planet.height;
				}
			});
		});
	});
});
