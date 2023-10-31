import { describe, it, expect } from 'vitest';
import { PlanetBuilder } from './builders/planet.builder';
import { CoordinateBuilder } from './builders/coordinate.builder';

describe('Planet should', () => {
	const planetHeight = 2;
	const planetWidth = 2;
	const planetWithoutObstacles = new PlanetBuilder().withHeight(planetHeight).withWidth(planetWidth).build();
	describe('be able to join the positive edges', () => {
		it('on Y', () => {
			const heighEdgeOfThePlanet = new CoordinateBuilder().withY(planetHeight).build();

			const coordinate = planetWithoutObstacles.joinEdge(heighEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new CoordinateBuilder().build());
		});

		it('on X', () => {
			const withEdgeOfThePlanet = new CoordinateBuilder().withX(planetWidth).build();

			const coordinate = planetWithoutObstacles.joinEdge(withEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new CoordinateBuilder().build());
		});
	});

	describe('be able to join the negative edges', () => {
		it('on Y', () => {
			const heighEdgeOfThePlanet = new CoordinateBuilder().withY(-1).build();

			const coordinate = planetWithoutObstacles.joinEdge(heighEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new CoordinateBuilder().withY(1).build());
		});

		it('on X', () => {
			const withEdgeOfThePlanet = new CoordinateBuilder().withX(-1).build();

			const coordinate = planetWithoutObstacles.joinEdge(withEdgeOfThePlanet);

			expect(coordinate).toStrictEqual(new CoordinateBuilder().withX(1).build());
		});
	});

	describe('be able to check if there is an obstacle', () => {
		const obstacle = new CoordinateBuilder().withY(1).build();
		const planetWithAnObstacle = new PlanetBuilder().withObstacles([obstacle]).build();
		it('when there is', () => {
			const isObstacle = planetWithAnObstacle.hasObstacleAt(obstacle);

			expect(isObstacle).toBeTruthy();
		});

		it('when there is not', () => {
			const nonObstaclePosition = new CoordinateBuilder().build();

			const isObstacle = planetWithAnObstacle.hasObstacleAt(nonObstaclePosition);

			expect(isObstacle).toBeFalsy();
		});
	});

	describe('have a minimum size', () => {
		it('ignoring negatives', () => {
			const planet = new PlanetBuilder().withHeight(-1).withWidth(-1).build();

			expect(planet).toStrictEqual(new PlanetBuilder().withHeight(1).withWidth(1).build());
		});
		it('ignoring zeros', () => {
			const planet = new PlanetBuilder().withHeight(0).withWidth(0).build();

			expect(planet).toStrictEqual(new PlanetBuilder().withHeight(1).withWidth(1).build());
		});
	});
});
