import { Direction } from "./direction";
import { West } from "./west";


export class North implements Direction {
  whatIsLeft(): Direction {
    return new West();
  }
}