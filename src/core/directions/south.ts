import { Direction } from "./direction";
import { East } from "./east";
import { West } from "./west";

export class South implements Direction {
	whatIsLeft() {
		return new East();
	}
	whatIsRight() {
		return new West();
	}
}
