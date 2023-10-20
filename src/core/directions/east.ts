import { Direction } from "./direction";

export class East implements Direction {
    whatIsLeft() {
        return this;
    }
    whatIsRight() {
        return this;
    }
}