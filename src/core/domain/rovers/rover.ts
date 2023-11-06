import { Planet } from '../planet/planet';
import { Navigator } from '../navigator/navigator';
import { Command } from './commands/command';
import { ObstacleFinder } from '../planet/obstacle.finder';
import { EdgeJoiner } from '../planet/edge.joiner';

export class Rover {
	private readonly obstacleFinder: ObstacleFinder;
	private readonly edgeJoiner: EdgeJoiner;
	constructor(private navigator: Navigator, private readonly planet: Planet) {
		this.obstacleFinder = new ObstacleFinder(this.planet);
		this.edgeJoiner = new EdgeJoiner(this.planet);
	}
	executeCommands(commands: Command[]) {
		commands.forEach((command) => {
			this.mapCommand(command)();
		});
	}

	private mapCommand(command: Command) {
		const commandMap = {
			F: () => this.navigator.moveForward(this.edgeJoiner, this.obstacleFinder),
			B: () => this.navigator.moveBackward(this.edgeJoiner, this.obstacleFinder),
			L: () => this.navigator.turnLeft(),
			R: () => this.navigator.turnRight(),
		};
		return commandMap[command];
	}
}
