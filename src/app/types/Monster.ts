export class Monster {
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
    this.monsterName = data.monsterName;
    this.monsterID = data.monsterID;
    this.monsterType = data.monsterType;
    this.baseStats = data.baseStats;
    this.abilities = data.abilities;
    this.moves = data.moves;
    this.evolutions = data.evolutions;
  }
}