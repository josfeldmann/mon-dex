export class Monster {
  monsterKey: string;
  monsterName: string;
  monsterID: number;
  monsterType: string[];
  baseStats: {
    HP: number;
    ATTACK: number;
    DEFENSE: number;
    SPECIALATTACK: number;
    SPECIALDEFENSE: number;
    SPEED: number;
  };
  abilities: string[];
  moves: string[];
  evolutions: string | null;

  constructor(data: {
    monsterKey : string;
    monsterName: string;
    monsterID: number;
    monsterType: string[];
    baseStats: {
      HP: number;
      ATTACK: number;
      DEFENSE: number;
      SPECIALATTACK: number;
      SPECIALDEFENSE: number;
      SPEED: number;
    };
    abilities: string[];
    moves: string[];
    evolutions: string | null;
  }) {
    this.monsterKey = data.monsterKey;
    this.monsterName = data.monsterName;
    this.monsterID = data.monsterID;
    this.monsterType = data.monsterType;
    this.baseStats = data.baseStats;
    this.abilities = data.abilities;
    this.moves = data.moves;
    this.evolutions = data.evolutions;
  }
}