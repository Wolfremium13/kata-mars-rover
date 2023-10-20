import { Direction } from "./direction";

export class South implements Direction {
	whatIsLeft() {
		return this;
	}
}
