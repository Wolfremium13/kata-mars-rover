import { describe, it, expect } from 'vitest';
import { Planet } from '../core/planet';
import { Coordinate } from '../core/coordinate';

describe('Planet should', () => {
	const planet = new Planet(2, 2);
	describe('be able to join the positive edges', () => {
		it('on X', () => {
			const startCoordinate = new Coordinate(0, 2);

			const coordinate = planet.joinEdge(startCoordinate);

			expect(coordinate).toStrictEqual(new Coordinate(0, 0));
		});

		it('on Y', () => {
			const startCoordinate = new Coordinate(2, 0);

			const coordinate = planet.joinEdge(startCoordinate);

			expect(coordinate).toStrictEqual(new Coordinate(0, 0));
		});
	});

	describe('be able to join the negative edges', () => {
		it('on X', () => {
			const startCoordinate = new Coordinate(0, -1);

			const coordinate = planet.joinEdge(startCoordinate);

			expect(coordinate).toStrictEqual(new Coordinate(0, 1));
		});

		it('on Y', () => {
			const startCoordinate = new Coordinate(-1, 0);

			const coordinate = planet.joinEdge(startCoordinate);

			expect(coordinate).toStrictEqual(new Coordinate(1, 0));
		});
	});
});
