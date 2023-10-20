import { describe, it, expect } from 'vitest';
import { East } from '../core/directions/east';
import { North } from '../core/directions/north';
import { South } from '../core/directions/south';
import { West } from '../core/directions/west';

describe('Directions should', () => {
	describe('be able to know what is left from', () => {
		it('North', () => {
			const north = new North();

			expect(north.whatIsLeft()).toStrictEqual(new West());
		});
		it('West', () => {
			const west = new West();

			expect(west.whatIsLeft()).toStrictEqual(new South());
		});
		it('South', () => {
			const south = new South();

			expect(south.whatIsLeft()).toStrictEqual(new East());
		});
		it('East', () => {
			const east = new East();

			expect(east.whatIsLeft()).toStrictEqual(new North());
		});
	});

	describe('be able to know what is right from', () => {
		it('North', () => {
			const north = new North();

			expect(north.whatIsRight()).toStrictEqual(new East());
		});
		it('East', () => {
			const east = new East();

			expect(east.whatIsRight()).toStrictEqual(new South());
		});
		it('South', () => {
			const south = new South();

			expect(south.whatIsRight()).toStrictEqual(new West());
		});
		it('West', () => {
			const west = new West();

			expect(west.whatIsRight()).toStrictEqual(new North());
		});
	});
});
