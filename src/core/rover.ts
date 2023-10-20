import { Coordinate } from './coordinate';
import { Direction } from './direction';
import { MoveBackward } from './movements/backward';
import { MoveForward } from './movements/forward';
import { Planet } from './planet';

type Command = 'F' | 'B' | 'L';
export class Rover {
	constructor(private direction: Direction, private coordinate: Coordinate, private readonly planet: Planet) {}

	executeCommands(commands: Command[]) {
		commands.forEach((command) => {
			const commandMap = {
				F: () => this.moveForward(),
				B: () => this.moveBackward(),
				L: () => {this.direction = Direction.WEST},
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
