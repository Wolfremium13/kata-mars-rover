import { describe, it, expect } from 'vitest';
import { North } from '../../core/domain/navigator/directions/north';
import { South } from '../../core/domain/navigator/directions/south';
import { West } from '../../core/domain/navigator/directions/west';
import { East } from '../../core/domain/navigator/directions/east';
import { PlanetBuilder } from './builders/planet.builder';
import { CoordinateBuilder } from './builders/coordinate.builder';
import { NavigatorBuilder } from './builders/navigator.builder';
import { ObstacleFinder } from '../../core/domain/planet/obstacle.finder';
import { EdgeJoiner } from '../../core/domain/planet/edge.joiner';

describe('Movements should', () => {
	describe('be able to', () => {
		const planetWithoutObstacles = new PlanetBuilder().withHeight(10).withWidth(10).build();
		const obstacleFinder = new ObstacleFinder(planetWithoutObstacles);
		const edgeJoiner = new EdgeJoiner(planetWithoutObstacles);
		describe('move forward', () => {
			const startPosition = new CoordinateBuilder().withX(5).withY(5).build();
			it('when facing north', () => {
				const direction = new North();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveForward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(5).withY(6).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing south', () => {
				const direction = new South();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveForward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(5).withY(4).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing east', () => {
				const direction = new East();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveForward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(6).withY(5).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing west', () => {
				const direction = new West();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveForward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(4).withY(5).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});
		});

		describe('move backward', () => {
			const startPosition = new CoordinateBuilder().withX(5).withY(5).build();
			it('when facing north', () => {
				const direction = new North();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveBackward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(5).withY(4).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing south', () => {
				const direction = new South();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveBackward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(5).withY(6).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing east', () => {
				const direction = new East();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveBackward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(4).withY(5).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing west', () => {
				const direction = new West();
				const navigator = new NavigatorBuilder().withCoordinate(startPosition).withDirection(direction).build();

				navigator.moveBackward(edgeJoiner, obstacleFinder);

				const expectedCoordinate = new CoordinateBuilder().withX(6).withY(5).build();
				const expectedNavigator = new NavigatorBuilder()
					.withCoordinate(expectedCoordinate)
					.withDirection(direction)
					.build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});
		});

		describe('turn left', () => {
			it('when facing north', () => {
				const direction = new North();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnLeft();

				const expectedDirection = new West();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing west', () => {
				const direction = new West();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnLeft();

				const expectedDirection = new South();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing south', () => {
				const direction = new South();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnLeft();

				const expectedDirection = new East();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing east', () => {
				const direction = new East();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnLeft();

				const expectedDirection = new North();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});
		});

		describe('turn right', () => {
			it('when facing north', () => {
				const direction = new North();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnRight();

				const expectedDirection = new East();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing east', () => {
				const direction = new East();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnRight();

				const expectedDirection = new South();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing south', () => {
				const direction = new South();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnRight();

				const expectedDirection = new West();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});

			it('when facing west', () => {
				const direction = new West();
				const navigator = new NavigatorBuilder().withDirection(direction).build();

				navigator.turnRight();

				const expectedDirection = new North();
				const expectedNavigator = new NavigatorBuilder().withDirection(expectedDirection).build();
				expect(navigator).toStrictEqual(expectedNavigator);
			});
		});
	});
});
