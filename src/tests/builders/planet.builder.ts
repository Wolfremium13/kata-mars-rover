import { Coordinate } from '../../core/coordinate';
import { Planet } from '../../core/planet';

export class PlanetBuilder {
	private width = 2;
	private height = 2;
	private obstacles: Coordinate[] = [];

	withWidth(width: number) {
		this.width = width;
		return this;
	}
	withHeight(height: number) {
		this.height = height;
		return this;
	}

	withObstacles(obstacles: Coordinate[]) {
		this.obstacles = obstacles;
		return this;
	}

	build() {
		return new Planet(this.width, this.height, this.obstacles);
	}
}
