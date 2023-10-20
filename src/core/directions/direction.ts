export type DirectionCode = 'N' | 'E' | 'S' | 'W';
export interface Direction {
    whatIsRight(): Direction;
    whatIsLeft(): Direction;
    getCode(): DirectionCode;
}