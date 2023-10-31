import { Coordinate } from "../../coordinates/coordinate";
import { Planet } from "../../planet/planet";


export interface Movement {
	getNextCoordinate(currentPosition: Coordinate, planet: Planet): Coordinate;
}
