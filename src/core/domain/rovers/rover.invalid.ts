import { Command } from './commands/command';
import { Navigator } from '../navigator/navigator';
import { Planet } from '../planet/planet';
import { Rover } from './rover';

export class InvalidRover extends Rover {
	constructor(navigator: Navigator, planet: Planet) {
		super(navigator, planet);
	}

	executeCommands(commands: Command[]) {}
}
