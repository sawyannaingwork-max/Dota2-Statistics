export type HeroAttribute = 'all' | 'str' | 'agi' | 'int' | null;

// Type of heroes
export interface Hero {
    id : number,
    name : string,
    localized_name : string,
    primary_attr : 'str' | 'agi' | 'int' | 'all',
    roles : string[],
    img : string,
    attack_type : 'Melee' | 'Range'
}