import { Coordinate } from "../../coordinates/coordinate";
import { EdgeJoiner } from "../../planet/edge.joiner";


export interface Movement {
	getNextCoordinate(currentPosition: Coordinate, edgeJoiner: EdgeJoiner): Coordinate;
}
