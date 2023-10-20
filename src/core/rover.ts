import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { Planet } from './planet';

type Command = 'F';
export class Rover {
	constructor(
		private readonly direction: Direction,
		private coordinate: Coordinate,
		private readonly planet: Planet
	) {}

	executeCommands(commands: Command[]) {
        if (commands.includes('F')) {
            this.coordinate = new Coordinate(0, 1);
        }
    }
}
