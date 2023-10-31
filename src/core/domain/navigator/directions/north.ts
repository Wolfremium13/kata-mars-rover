import { Direction, DirectionCode } from './direction';
import { East } from './east';
import { West } from './west';

export class North implements Direction {
	whatIsLeft(): Direction {
		return new West();
	}
	whatIsRight(): Direction {
		return new East();
	}
	getCode(): DirectionCode {
		return 'N';
	}
}
