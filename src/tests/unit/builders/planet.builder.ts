import { Coordinate } from "../../../core/domain/coordinates/coordinate";
import { PlanetWidth, PlanetHeight, Planet } from "../../../core/domain/planet/planet";

export class PlanetBuilder {
	private width: PlanetWidth = PlanetWidth.from(2);
	private height: PlanetHeight = PlanetHeight.from(2);
	private obstacles: Coordinate[] = [];

	withWidth(width: number) {
		this.width = PlanetWidth.from(width);
		return this;
	}
	withHeight(height: number) {
		this.height = PlanetHeight.from(height);
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
