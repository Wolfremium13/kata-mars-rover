import { Coordinate } from './coordinate';
import { Direction } from './directions/direction';
import { MoveBackward } from './movements/backward';
import { MoveForward } from './movements/forward';
import { Planet } from './planet';

type Command = 'F' | 'B' | 'L' | 'R';
export class Rover {
	constructor(private direction: Direction, private coordinate: Coordinate, private readonly planet: Planet) {}

	executeCommands(commands: Command[]) {
		commands.forEach((command) => {
			const commandMap = {
				F: () => this.moveForward(),
				B: () => this.moveBackward(),
				L: () => this.turnLeft(),
				R: () => this.turnRight(),
			};
			commandMap[command]();
		});
	}
	
	private moveForward() {
		const nextCoordinate = new MoveForward(this.direction).move(this.coordinate, this.planet);
		if(this.planet.hasObstacleAt(nextCoordinate)) {
			return;
		}
		this.coordinate = new MoveForward(this.direction).move(this.coordinate, this.planet);
	}
	
	private moveBackward() {
		this.coordinate = new MoveBackward(this.direction).move(this.coordinate, this.planet);
	}
	
	private turnLeft() {
		this.direction = this.direction.whatIsLeft();
	}
	private turnRight() {
		this.direction = this.direction.whatIsRight();
	}
}
