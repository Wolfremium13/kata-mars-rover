import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { MoveBackward } from './movements/backward';
import { MoveForward } from './movements/forward';
import { Planet } from './planet';

type Command = 'F' | 'B';
export class Rover {
	constructor(private readonly direction: Direction, private coordinate: Coordinate, private readonly planet: Planet) {}

	executeCommands(commands: Command[]) {
		commands.forEach((command) => {
			const commandMap = {
				F: () => this.moveForward(),
				B: () => this.moveBackward(),
			};
			commandMap[command]();
		});
	}

	private moveForward() {
		this.coordinate = new MoveForward().move(this.coordinate, this.planet);
	}

	private moveBackward() {
		this.coordinate = new MoveBackward().move(this.coordinate, this.planet);
	}
}
