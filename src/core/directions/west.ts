import { Direction } from './direction';
import { North } from './north';
import { South } from './south';

export class West implements Direction {
	whatIsLeft() {
		return new South();
	}
	whatIsRight() {
		return new North();
	}
}
