import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { MoveForward } from './movements/forward';
import { Planet } from './planet';

type Command = 'F';
export class Rover {
	constructor(
		private readonly direction: Direction,
		private coordinate: Coordinate,
		private readonly planet: Planet
	) {}

	executeCommands(commands: Command[]) {
        commands.forEach((command) => {
            this.coordinate = new MoveForward().move(this.coordinate, this.planet);
        });
    }
}
