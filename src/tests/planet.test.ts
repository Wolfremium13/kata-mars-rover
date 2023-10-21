import { describe, it, expect } from 'vitest';
import { Coordinate } from '../core/coordinate';
import { PlanetBuilder } from './builders/planet.builder';

describe('Planet should', () => {
	const planetHeight = 2;
	const planetWidth = 2;
	const planetWithoutObstacles = new PlanetBuilder().withHeight(planetHeight).withWidth(planetWidth).build();
	describe('be able to join the positive edges', () => {
		it('on Y', () => {
			const heighEdgeOfThePlanet = new Coordinate(0, planetHeight);

			const coordinate = planetWithoutObstacles.joinEdge(heighEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new Coordinate(0, 0));
		});

		it('on X', () => {
			const withEdgeOfThePlanet = new Coordinate(planetWidth, 0);

			const coordinate = planetWithoutObstacles.joinEdge(withEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new Coordinate(0, 0));
		});
	});

	describe('be able to join the negative edges', () => {
		it('on Y', () => {
			const heighEdgeOfThePlanet = new Coordinate(0, -1);

			const coordinate = planetWithoutObstacles.joinEdge(heighEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new Coordinate(0, 1));
		});

		it('on X', () => {
			const withEdgeOfThePlanet = new Coordinate(-1, 0);

			const coordinate = planetWithoutObstacles.joinEdge(withEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new Coordinate(1, 0));
		});
	});

	describe('be able to check if there is an obstacle', () => {
		const obstacle = new Coordinate(0, 1);
		const planetWithAnObstacle = new PlanetBuilder().withObstacles([obstacle]).build();
		it('when there is', () => {
			const isObstacle = planetWithAnObstacle.hasObstacleAt(obstacle);

			expect(isObstacle).toBeTruthy();
		});

		it('when there is not', () => {
			const nonObstaclePosition = new Coordinate(0, 0);

			const isObstacle = planetWithAnObstacle.hasObstacleAt(nonObstaclePosition);

			expect(isObstacle).toBe(false);
		});
	});
});
