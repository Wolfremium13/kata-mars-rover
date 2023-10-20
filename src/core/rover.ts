import { Coordinate } from './coordinate';
import { Direction } from './directions/direction';
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
				L: () => this.turnLeft(),
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

	private turnLeft() {
		this.direction = this.direction.whatIsLeft();
	}
}
