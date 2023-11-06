import { Coordinate } from "../coordinates/coordinate";
import { Planet } from "./planet";

export class ObstacleFinder {
    constructor(private readonly planet: Planet) {
    }
    isObstacleAt(coordinate: Coordinate) {
        return this.planet.hasObstacleAt(coordinate);
    }
}