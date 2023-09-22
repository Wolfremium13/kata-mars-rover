import { Position } from "../domain/position";

export interface Direction {
	what_is_left(): Direction;
	what_is_right(): Direction;
    what_is_forward(position: Position): Position;
    what_is_backward(position: Position): Position;
}
