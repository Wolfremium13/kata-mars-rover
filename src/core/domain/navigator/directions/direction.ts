export type DirectionCode = 'N' | 'E' | 'S' | 'W';
export interface Direction {
    // Makes sense to move this logic into Movements??
    whatIsRight(): Direction;
    whatIsLeft(): Direction;
    getCode(): DirectionCode;
}