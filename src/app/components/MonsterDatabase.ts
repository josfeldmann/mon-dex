import { MonsterDictionary } from "./MonsterDictionary";
import { Monster } from "./Monster";
import { AbilityDictionary } from "./AbilityDictionary";
import { Ability } from "./Ability";

export class MonsterDatabase {
  monsters: MonsterDictionary;
  abilities: AbilityDictionary;

  constructor(data: { monsters: Record<string, Monster>, abilities: Record<string, Ability> }) {
    // Convert each plain object into a Monster instance
    this.monsters = Object.entries(data.monsters).reduce((acc, [key, value]) => {
      acc[key] = new Monster(value);
      return acc;
    }, {} as MonsterDictionary);


    this.abilities = Object.entries(data.abilities).reduce((acc, [key, value]) => {
      acc[key] = new Ability(value);
      return acc;
    }, {} as AbilityDictionary);
    



  }

  // Example: get monster by name
  getMonster(name: string): Monster | undefined {
    return this.monsters[name];
  }

  getAbility(id: string) : Ability | undefined {
    return this.abilities[id];
  }

  // Example: get all monsters as an array
  getAll(): Monster[] {
    return Object.values(this.monsters);
  }

  getMonsterKeys() : string[] {
    return Object.keys(this.monsters);
  }

  getAbilityKeys() : string[] {
    return Object.keys(this.abilities);
  }
}