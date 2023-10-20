import { Coordinate } from "../coordinate";
import { Planet } from "../planet";

export interface Movement {
    move(currentPosition: Coordinate, planet: Planet): Coordinate;
}