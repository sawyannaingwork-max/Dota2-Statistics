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

// Type of herostat
export interface HeroStats {
    id : number,
    name : string,
    localized_name : string,
    primary_attr : 'str' | 'agi' | 'int' | 'all',
    attack_type : 'Melee' | 'Range',
    roles : string[],
    img : string,
    icon : string,
    base_health : number,
    base_health_regen : number,
    base_mana : number,
    base_mana_regen : number,
    base_armor : number,
    base_mr : number,
    base_attack_min : number,
    base_attack_max : number,
    base_str : number,
    base_agi : number,
    base_int : number,
    str_gain : number,
    agi_gain : number,
    int_gain : number,
    attack_range : number,
    projectile_speed : number,
    attack_rate : number,
    base_attack_time : number,
    attack_point : number,
    move_speed : number,
    turn_rate : number | null,
    cm_enabled : boolean,
    lets : number,
    day_vision : number,
    night_vision : number,
    hero_id : number,
    turbo_picks : number,
    turbo_wins : number,
    pro_ban : number,
    pro_win : number,
    pro_pick : number,
    "1_pick" : number,
    "1_win" : number,
    "2_pick" : number,
    "2_win" : number,
    "3_pick" : number,
    "3_win" : number,
    "4_pick" : number,
    "4_win" : number,
    "5_pick" : number,
    "5_win" : number,
    "6_pick" : number,
    "6_win" : number,
    "7_pick" : number,
    "7_win" : number,
    "8_pick" : number,
    "8_win" : number
}

// Type of hero facets
export interface HeroFacets {
    id : number,
    title : string,
    description : string
}

// Type of hero ability
export interface HeroAbility {
    dname : string,
    behavior : string | string[],
    bkbpierce : string | undefined,
    dispellable : string | undefined,
    target_team : string | undefined,
    target_type : string | string[] | undefined,
    desc : string,
    lore : string,
    mc : string | string[] | undefined,
    cd : string | string[] | undefined,
    img : string,
    dmg_type : string | undefined,
    is_innate : true | undefined,
    attrib : AbilityAttribute[]
}

// Type of hero ability attribute
interface AbilityAttribute {
    key : string,
    header : string,
    value : string | string[]
}

type Items = Record<string, number>

// Type of recommand items
export interface RecommandItems {
    start_game_items : Items,
    early_game_items : Items,
    mid_game_items : Items,
    late_game_items : Items
}

// Type of matchups
export interface MatchUps {
    hero_id : number,
    games_played : number,
    wins : number
}

// Type of pro matches for hero
export interface HeroMatches {
    match_id : number,
    start_time : number,
    duration : number,
    radiant_win : boolean,
    league_name : string,
    radiant : boolean,
    kills : number,
    deaths : number,
    assists : number
}

export interface Team {
    team_id : number,
    name : string | null,
    tag : string | null,
    logo_url : string | null
}

export interface League {
    leagueid : number,
    tier : string,
    name : string
}

// Type of pro match detail
export interface ProMatch {
    match_id : number,
    dire_score : number,
    radiant_score : number,
    radiant_win : boolean | null,
    start_time : number,
    duration : number,
    radiant_team : Team | null,
    dire_team : Team | null,
    league : League,
    players : ProPlayer[]
}

// Type for kill log
interface KillLog {
    time : number,
    key : string
}

// type for purchase log
interface PurchaseLog {
    time : number,
    key : string
}

// type for netural item
interface NeutralItem {
    item_neutral : string | null,
    time : number
}

// type of pro player
export interface ProPlayer {
    account_id : number,
    hero_id : number,
    kills : number,
    deaths : number,
    assists : number,
    gold_per_min : number,
    xp_per_min : number,
    net_worth : number,
    personaname : string | null,
    name : string | null,
    last_hits : number,
    denies : number,
    neutral_kills : number,
    tower_kills : number,
    courier_kills : number,
    observer_kills : number,
    sentry_kills : number,
    roshan_kills : number,
    necronomicon_kills : number,
    ancient_kills : number,
    killed : Record<string, number>,
    killed_by : Record<string, never> | Record<string, number>,
    kills_log : KillLog[],
    damage : Record<string, number>,
    damage_taken : Record<string, number>,
    hero_damage : number,
    tower_damage : number,
    purchase_log : PurchaseLog[],
    item_uses : Record<string, number>,
    item_0 : number,
    item_1 : number,
    item_2 : number,
    item_3 : number,
    item_4 : number,
    item_5 : number,
    backpack_0 : number,
    backpack_1 : number,
    backpack_2 : number,
    neutral_item_history : NeutralItem[],
    ability_uses : Record<string, number>,
    ability_targets : Record<string, Record<string, number>>,
    ability_upgrades_arr : number[]
}

// Type for pro matches
export interface PublicMatch {
    match_id : number,
    radiant_win : boolean | null,
    start_time : number,
    duration : number,
    avg_rank_tier : number,
    radiant_team : number[],
    dire_team : number[]
}

// Type for public match detail
export interface PublicMatchDetailType {
    radiant_win : boolean | null,
    duration : number,
    start_time : number,
    match_id : number,
    lobby_type : number,
    game_mode : number,
    radiant_score : number,
    dire_score : number,
    players : PublicPlayer[]
}

// Type for public match player
export interface PublicPlayer {
    account_id : number | null,
    hero_id : number,
    item_0 : number,
    item_1 : number,
    item_2 : number,
    item_3 : number,
    item_4 : number,
    item_5 : number,
    backpack_0 : number,
    backpack_1 : number,
    backpack_2 : number,
    kills : number,
    deaths : number,
    assists : number,
    last_hits : number,
    denies : number,
    gold_per_min : number,
    xp_per_min : number,
    level : number,
    net_worth : number,
    hero_damage : number,
    tower_damage : number,
    ability_upgrades_arr : number[] ,
    name : string | null,
    personaname : string | null

}

// Type for Pro Match List
export interface ProTeamMatch {
    match_id : number,
    duration : number,
    start_time : number,
    radiant_team_id : number,
    radiant_name : string | null,
    dire_team_id : number,
    dire_name : string | null,
    radiant_score : number,
    dire_score : number,
    radiant_win : boolean | null,
    league_name : string
}

// Type for pro team
export interface ProTeam {
    team_id : number,
    rating : number,
    wins : number,
    losses : number,
    name : string,
    logo_url : string | null
}

// Type for pro team player
export interface ProTeamPlayer {
    account_id : number,
    name : string | null,
    games_played : number,
    wins : number,
    is_current_team_member : boolean
}

// Type for pro team heroes
export interface ProTeamHero {
    hero_id : number,
    localized_name : string,
    games_played : number,
    wins : number
}

// Type for pro team matches
export interface ProTeamMatch {
    match_id : number,
    radiant_win : boolean | null,
    radiant_score : number,
    dire_score : number,
    radiant : boolean,
    league_name : string,
    opposing_team_id : number,
    opposing_team_name : string,
    opposing_team_logo : string | null,
    start_time : number
}

// Type for player basic info
export interface PlayerBasicInfo {
    profile : {
        account_id : number,
        personaname : string,
        avatarfull : string,
        last_login : string | null,
        loccountrycode : string
    },
    rank_tier : number,
    computed_mmr : number | null
}

// Type for player win rate
export interface PlayerWinRate {
    win : number,
    lose : number
}

// Type for player hero stats
export interface PlayerHeroStats 
{
    hero_id : number,
    last_played : number,
    games : number,
    win : number,
    with_games : number,
    with_win : number,
    against_games : number,
    against_win : number
}