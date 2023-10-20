import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { Planet } from './planet';

type Command = 'F';
export class Rover {
	constructor(
		private readonly direction: Direction,
		private readonly coordinate: Coordinate,
		private readonly planet: Planet
	) {}

	executeCommands(commands: Command[]) {}
}
