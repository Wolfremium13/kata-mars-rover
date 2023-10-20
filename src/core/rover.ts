import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { MoveForward } from './movements/forward';
import { Planet } from './planet';

type Command = 'F' | 'B';
export class Rover {
	constructor(
		private readonly direction: Direction,
		private coordinate: Coordinate,
		private readonly planet: Planet
	) {}

	executeCommands(commands: Command[]) {
		if (commands.includes('B')) {
			this.coordinate = new Coordinate(0, 0);
			return;
		}
        commands.forEach((command) => {
            this.coordinate = new MoveForward().move(this.coordinate, this.planet);
        });
    }
}
