import { Direction } from './direction';
import { South } from './south';

export class West implements Direction {
	whatIsLeft() {
		return new South();
	}
}
