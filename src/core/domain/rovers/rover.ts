import { Planet } from '../planet/planet';
import { Navigator } from '../navigator/navigator';
import { Command } from './commands/command';

export class Rover {
	constructor(private navigator: Navigator, private readonly planet: Planet) {}
	executeCommands(commands: Command[]) {
		commands.forEach((command) => {
			this.mapCommand(command)();
		});
	}

	private mapCommand(command: Command) {
		const commandMap = {
			F: () => this.navigator.moveForward(this.planet),
			B: () => this.navigator.moveBackward(this.planet),
			L: () => this.navigator.turnLeft(),
			R: () => this.navigator.turnRight(),
		};
		return commandMap[command];
	}
}
