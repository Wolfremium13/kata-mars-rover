import { Direction, DirectionCode } from './direction';
import { North } from './north';
import { South } from './south';

export class East implements Direction {
	whatIsLeft() {
		return new North();
	}
	whatIsRight() {
		return new South();
	}
	getCode(): DirectionCode {
		return 'E';
	}
}
